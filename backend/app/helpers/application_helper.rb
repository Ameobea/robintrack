require 'date'

module ApplicationHelper
  def hash_hash(hash)
    hash.keys.sort.map { |key| hash[key] }.join("_")
  end

  def get_cache(hash_name, key)
    $redis.hget hash_name, key
  end

  # Inserts an item into the cache with a given hash name and key, returning whatever was inserted.
  def put_cache(hash_name, key, val, json)
    val = (json ? JSON.dump(val) : val)
    $redis.hset hash_name, key, val
    val
  end

  def delete_cache(hash_name, key)
    $redis.hdel hash_name, key
  end

  # Given the name of the has in the cache to use, first attempts to retrieve an existing value
  # from it with the given `key`.  If no value exists, the inner function provided to the block
  # will be called.  Its return value will be inserted into the cache and returned from this
  # function for returning to the user.
  def with_cache(hash_name, key, json: true)
    cached = get_cache hash_name, key

    # If the cache value is currently being computed, we bail out early and expect the client to
    # re-request in a bit.
    #
    # If the value has been computing for longer than the cutoff, we assume the old computation
    # failed and compute it ourselves
    is_recomputing = false
    if cached
      if cached.start_with? "__computing__"
        date_string = cached.split("__computing__")[1]
        date = Date.parse(date_string)

        if date < 3.minute.ago.utc
          raise ApplicationController::LockError
        else
          is_recomputing = true
        end
      else
        return cached
      end
    end

    # Lock the cache entry that we're trying to write to in order to ensure that we're not
    # computing the same expensive value that some other worker is already computing
    lock_key = "#{hash_name}_#{key}"
    ret = nil
    $lock_manager.lock(lock_key, 18502) do |locked|
      if locked
        begin
          # It's possible someone else was computing this while we were waiting for the lock.  If so, we
          # just return that and avoid re-computing
          refreshed_cached = get_cache hash_name, key

          if cached != refreshed_cached
            if refreshed_cached.starts_with? "__computing__"
              # Someone else beat us to the lock and is re-computing the value, so we just let them do it
              $lock_manager.unlock(locked)
              raise ApplicationController::LockError
            end

            # Someone else populated the cache fully already so we bail and return that
            ret = refreshed_cached
            next
          end

          # Create a placeholder value in the cache indicating that the value is currently being computed
          # and when the computation started
          now = Time.new
          date_string = now.strftime("%Y-%m-%d %H:%M:%S")
          placeholder_val = "__computing__#{date_string}"
          put_cache hash_name, key, placeholder_val, false

          # Compute the new value while holding the lock, set it in the cache, and then drop the lock
          ret = put_cache hash_name, key, yield, json
        rescue ApplicationController::NotFound
          delete_cache hash_name, key
          $lock_manager.unlock(locked)
          raise ApplicationController::NotFound
        rescue => e
          p "ERROR in critical section while holding lock:"
          p e
          delete_cache hash_name, key
          $lock_manager.unlock(locked)
          raise ApplicationController::LockError
        end
      else
        p "Failed to acquire a lock for key #{lock_key} in the timeout period"
        $lock_manager.unlock(locked)
        raise ApplicationController::LockError
      end
    end

    ret
  end
end
