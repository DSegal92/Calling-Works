class IssuesController < ApplicationController
  def index
    address = params[:address]

    issues = IssuesAdapter.issues(address)

    puts issues.to_json
    render json: issues.to_json
  end
end
