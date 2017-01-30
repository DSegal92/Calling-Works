class CivicsAdapter
  include HTTParty

  base_uri 'https://www.googleapis.com/civicinfo/v2'

  def self.friendly
    { 'President of the United States' => 'president',
      'Vice-President of the United States' => 'vice_president',
      'United States Senate' => 'senator' }
  end

  def self.reps(address)
    options = { query: { address: address,
                         key: GOOGLE_API_KEY,
                         levels: 'country'
    } }

    resp = get('/representatives', options)

    return [] unless resp.dig('error', 'errors').nil?

    senate_counter = 0

    resp['officials'].map.with_index do |r, index|
      office = resp['offices'].select { |o| o['officialIndices'].include?(index) }.first['name']
      designator = friendly[office]

      if designator&.include?('senator')
        designator = "senator_#{senate_counter}"
        senate_counter += 1
      end

      if office.include?('Representative')
        designator = "representative"
      end

      Official.new(r.merge('designator' => designator,
                           'office' => office))
    end
  end
end
