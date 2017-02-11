REDIS_CONFIG = YAML.load_file(File.join(Rails.root,
                                        'config',
                                        'redis.yml'))[Rails.env]

opt = {}
opt.merge!(password: REDIS_CONFIG['password']) if REDIS_CONFIG['password']
REDIS = ConnectionPool.new(size: 10) { Redis.new(opt) }
