module ApplicationHelper
  def cache_locked?
    $redis.get "CACHE_LOCKED"
  end

  def hash_hash(hash)
    hash.keys.sort.map { |key| hash[key] }.join("_")
  end

  def get_cache(hash_name, key)
    $redis.hget hash_name, key
  end

  # Inserts an item into the cache with a given hash name and key, returning whatever was inserted.
  def put_cache(hash_name, key, val)
    $redis.hset hash_name, key, JSON.dump(val)
    val
  end

  # Given the name of the has in the cache to use, first attempts to retrieve an existing value
  # from it with the given `key`.  If no value exists, the inner function provided to the block
  # will be called.  Its return value will be inserted into the cache and returned from this
  # function for returning to the user.
  def with_cache(hash_name, key)
    cached = get_cache hash_name, key
    return cached if cached

    if cache_locked?
      return yield
    else
      return put_cache hash_name, key, yield
    end
  end
end
