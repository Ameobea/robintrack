module ApplicationHelper
  def cache_locked?
    $redis.get("CACHE_LOCKED")
  end

  def hash_hash(hash)
    hash.keys.sort.map { |key| hash[key] }.join("_")
  end

  def get_cache(hash_name, key)
    if cache_locked?
      return nil
    end

    $redis.hget(hash_name, key)
  end

  # Inserts an item into the cache with a given hash name and key, returning whatever was inserted.
  def put_cache(hash_name, key, val)
    $redis.hset(hash_name, key, JSON.dump(val))
    val
  end
end
