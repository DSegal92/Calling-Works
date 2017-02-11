class CallMessageController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    call_key = params[:call_key]
    message = Redis.new.get("CALL::#{call_key}")

    Redis.new.del("CALL::#{call_key}")

    render xml: Gyoku.xml({ Response: { Say: message,
                                        attributes!: { Say:
                                                       { voice: 'woman' } } } }, key_converter: :camelcase)
  end
end
