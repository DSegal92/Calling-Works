class CallMessageController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    render xml: Gyoku.xml({ Response: { Say: params[:message],
                                        attributes!: { Say:
                                                       { voice: 'woman' } } } }, key_converter: :camelcase)
  end
end
