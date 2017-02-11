class MakeCall < ActiveJob::Base
  def perform(script, number)
    call_key = "#{SecureRandom.uuid}-#{number}"

    REDIS.with { |r| r.set("CALL::#{call_key}", script) }

    c = Twilio::REST::Client.new(TWILIO_CONFIG['account_sid'],
                                 TWILIO_CONFIG['auth_token'])

    escaped= URI.escape("https://calling.works/call_message?call_key=#{call_key}")

    c.account.calls.create(to: number,
                           url: escaped,
                           from: TWILIO_CONFIG['number'])
  end
end
