class ShopsController < ApplicationController
    def index
        render json: Shop.all
    end
end
