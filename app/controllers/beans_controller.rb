class BeansController < ApplicationController
    def index
        render json: Bean.all
    end
end
