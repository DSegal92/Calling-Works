GOOGLE_API_KEY = YAML.load_file(File.join(Rails.root,
                                          'config',
                                          'google_api.yml'))['key']
