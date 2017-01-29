class Official
  attr_reader :name, :address, :party, :phones, :photoUrl

  def initialize(params)
    @name = params['name']
    @address = Address.new(params['address'].first)
    @party = params['party']
    @phones = params['phones'].first
    @photoUrl = params['photoUrl']
  end
end
