GA_CONFIG = YAML.load_file(File.join(Rails.root,
                                     'config',
                                     'ga.yml'))[Rails.env]
