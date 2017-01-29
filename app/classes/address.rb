class Address
  def initialize(params)
    @line1 = params['line1']
    @line2 = params['line2']
    @city = params['city']
    @state = params['state']
    @zip = params['zip']
  end
end
