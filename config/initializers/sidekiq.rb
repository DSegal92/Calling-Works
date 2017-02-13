SIDEKIQ_CONFIG = YAML.load_file(File.join(Rails.root,
                                          'config',
                                          'sidekiq.yml'))

Sidekiq.configure_server do |config|
  config.redis = { password: REDIS_CONFIG['password'] }
   config.server_middleware do |chain|
      chain.add Sidekiq::Middleware::Server::RetryJobs, max_retries: 0
   end
end

Sidekiq.configure_client do |config|
  config.redis = { password: REDIS_CONFIG['password'] }
end
