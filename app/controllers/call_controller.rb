class CallController < ApplicationController
  def new
  end

  def create
    phones = params[:phones]
    phones.compact!

    phones.each do |p|
      MakeCall.perform_later(params[:script], p)
    end

    render json: true
  end
end
