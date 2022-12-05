class FavoritesController < ApplicationController
    def index
        render json: Favorite.all
    end
end
