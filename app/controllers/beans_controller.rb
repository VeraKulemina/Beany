class BeansController < ApplicationController


    
    def index
        render json: Bean.all
    end

    def show
        bean = Bean.where(shop_id: params[:id])
        if bean
            render json: bean
        else render json: { error: "Bean not found" }, status: :not_found
      end
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
        params.require(:bean).permit(:origin, :name, :description, :image, :roast, :shop_id)
    end
end
