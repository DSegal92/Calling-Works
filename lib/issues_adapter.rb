class IssuesAdapter
  include HTTParty
  debug_output $stdout

  base_uri 'https://5calls.org/issues'

  def self.issues(address)
    resp = JSON.parse(get("/#{URI.encode(address)}").body)['issues']

    resp.map { |x| Issue.new(x) }
  end
end
