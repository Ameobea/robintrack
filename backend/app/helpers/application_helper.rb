module ApplicationHelper
  def cache_locked
    $redis.get("CACHE_LOCKED")
  end

  # Wraps `method` in a function which first checks the hash defined by `name` in the Redis cache
  # for an existing value.  The key is created by concatenating all of the arguments passed to
  # the inner function.  In the case of a cache miss, the inner function will be called and its
  # return value will be inserted into the cache.  If the cache is locked, the cache is bypassed.
  # The formatter is responsible for transforming the value returned by the `method` into a JSON
  # string which can be both inserted into the cache and returned to the requester.
  def with_cache(name, method, formatter)
    Proc.new {|*args, **kwargs|
      if cache_locked
        next formatter method(*args, **kwargs)
      end

      kwargs_hash = kwargs.keys.sort.map { |key| kwargs[key] }.join("_")
      hash_key = args.join("_") + kwargs_hash
      cache_val = $redis.hget(name, hash_key)

      if cache_val.nil?
        # Cache miss
        entries = method.call(*args, **kwargs)
        inner_val = formatter.call(entries)
        $redis.hset(name, hash_key, JSON.dump(inner_val))
        next inner_val
      else
        # Cache hit
        next cache_val
      end
    }
  end
end
