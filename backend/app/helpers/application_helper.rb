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

  # Given the name of the has in the cache to use, first attempts to retrieve an existing value
  # from it with the given `key`.  If no value exists, the inner function provided to the block
  # will be called.  Its return value will be inserted into the cache and returned from this
  # function for returning to the user.
  def with_cache(hash_name, key, json: true)
    # Lock the cache entry that we're trying to write to in order to ensure that we're not
    # computing the same expensive value that some other worker is already computing
    lock_key = "#{hash_name}_#{key}"
    $lock_manager.lock(lock_key, 240000) do |locked|
      if locked
        cached = get_cache hash_name, key
        return cached if cached

        # Compute the new value while holding the lock, set it in the cache, and then drop the lock
        return put_cache hash_name, key, yield, json
      else
        p "ERROR: Failed to acquire a lock for key #{lock_key} in the timeout period"
        raise ApplicationController::LockError
      end
    end
  end
end
