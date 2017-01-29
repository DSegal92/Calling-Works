class CivicsAdapter
  include HTTParty

  base_uri 'https://www.googleapis.com/civicinfo/v2'

  def self.reps(address)
    options = { query: { address: address,
                         key: GOOGLE_API_KEY,
                         levels: 'country'
    } }

    resp = get('/representatives', options)

    return [] unless resp.dig('error', 'errors').nil?

    resp['officials'].map { |r| Official.new(r) }
  end
end
