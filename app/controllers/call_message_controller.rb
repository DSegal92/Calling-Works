class CallMessageController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    call_key = "CALL:#{params[:call_key]}"
    message = REDIS.with { |r| r.get(call_key) }

    REDIS.with { |r| r.del(call_key) }

    render xml: Gyoku.xml({ Response: { Say: message,
                                        attributes!: { Say:
                                                       { voice: 'woman' } } } }, key_converter: :camelcase)
  end
end
