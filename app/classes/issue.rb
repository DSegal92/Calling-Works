class Issue
  attr_reader :id, :name, :reason, :script

  def initialize(params)
    @id = params['id']
    @name = params['name']
    @reason = params['reason']
    @script = params['script']
  end
end
