class FavoritesController < ApplicationController
    def index
        render json: Favorite.all
    end

    def create
        favorite = Favorite.create!(favorite_params)
        render json: favorite , status: :created
    end
end