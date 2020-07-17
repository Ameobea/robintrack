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
    if cached && !cached.start_with?("__computing__")
      return cached
    end
    # If the value is currently being computed, we fall back to trying to acquire the lock and then
    # return the value from there once we have it.

    # Lock the cache entry that we're trying to write to in order to ensure that we're not
    # computing the same expensive value that some other worker is already computing
    lock_key = "#{hash_name}_#{key}"
    ret = nil
    $lock_manager.lock(lock_key, 240000) do |locked|
      if locked
        begin
          # It's possible someone else was computing this while we were waiting for the lock.  If so, we
          # just return that and avoid re-computing
          refreshed_cached = get_cache hash_name, key

          if cached != refreshed_cached
            if refreshed_cached.starts_with?("__computing__")
              # The 4-minute window for computing that value has expired since their lock ran out.  Maybe
              $lock_manager.unlock(locked)
              raise ApplicationController::LockError
            end

            # Someone else populated the cache fully already so we bail and return that
            ret = refreshed_cached
            next
          end

          # Create a placeholder value in the cache indicating that the value is currently being computed
          #
          # We have exclusive access to this cache entry currently.
          put_cache hash_name, key, "__computing__", false

          # Compute the new value while holding the lock, set it in the cache, and then drop the lock
          ret = put_cache hash_name, key, yield, json
          $lock_manager.unlock(locked)
          next
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
        raise ApplicationController::LockError
      end
    end

    ret
  end
end
