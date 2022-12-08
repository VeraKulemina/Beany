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

    # def update
    #     shop = Shop.find_by(id: params[:id])
    #     shop.update!(shop_review)
    #     render json: shop
    # end
    def update
        shop = Shop.find(params[:id])
        if shop
          shop.update(shop_review)
          render json: shop
        else
          render json: { error: "Shop not found" }, status: :not_found
        end
      end

    private
        def shop_params
            params.permit(:name, :address, :review)
        end

        def shop_review
            params.require(:shop).permit(:review)
        end    
end