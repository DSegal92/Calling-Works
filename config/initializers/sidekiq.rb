SIDEKIQ_CONFIG = YAML.load_file(File.join(Rails.root,
                                          'config',
                                          'sidekiq.yml'))

Sidekiq.configure_server do |config|
  config.redis = { password: SIDEKIQ_CONFIG['redis_password'] }
end

Sidekiq.configure_client do |config|
  config.redis = { password: SIDEKIQ_CONFIG['redis_password'] }
end
