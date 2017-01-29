class RepresentativesController < ApplicationController
  def index
    address = params[:address]

    reps = CivicsAdapter.reps(address)

    return head status: :bad_request if reps == []
    render json: reps.to_json
  end
end
