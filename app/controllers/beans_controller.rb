class BeansController < ApplicationController


    
    def index
        render json: Bean.all
    end

    def show
        shop = Bean.find(params[:id])
        render json: shop, serializer: BeansWithShopSerializerSerializer
    end

    def create
        bean = Bean.create!(bean_params)
        render json: bean, status: :created
    end

    def destroy
        bean = Bean.find(params[:id])
        bean.destroy
        head :no_content
    end

  

    private

    def bean_params
        params.require(:bean, :shop).permit(:origin, :name, :description, :image, :roast, :shop_id)
    end
end
