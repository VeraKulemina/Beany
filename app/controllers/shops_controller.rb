class ShopsController < ApplicationController
    def index
        render json: Shop.all
    end

    def show
        shop = Shop.find(params[:id])
        render json: shop
    end

    def create
        shop = Shop.create!(shop_params)
        render json: shop, status: :created
    end

    def destroy
        shop = Shop.find(params[:id])
        shop.destroy
        head :no_content
    end

    private
        def shop_params
            params.permit(:name, :address, :img)
        end
end