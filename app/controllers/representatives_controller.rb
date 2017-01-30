class RepresentativesController < ApplicationController
  def index
    address = params[:address]

    reps = CivicsAdapter.reps(address)

    return head status: :bad_request if reps == []
    puts reps.to_json
    render json: reps.to_json
  end
end
