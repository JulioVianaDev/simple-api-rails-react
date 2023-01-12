class Api::OrdersController < ApplicationController
  before_action :set_order, only: [:update,:show,:destroy]

  def index
    @orders = Order.all 
    render json: @orders
  end

  def show
    # @order = Order.find(params[:id]) ;
    render json: @order 
  end

  def create
    @order = Order.new(order_params)
    if @order.save
      render json: @order 
    else
      render json: {errors: @order.errors, message: "não foi possivel cadastrar o produto"},status: :unprocessable_entity
    end
  end

  def update
    # @order = Order.find(params[:id])
    if @order.update(order_params)
      render json: @order 
    else
      render json: {errors: @order.errors,message: "Não foi possivel atualizar seu pedido"},status: :unprocessable_entity
    end
  end

  def destroy
    # @order = Order.find(params[:id])
    @order.destroy
    render json: {message: "Pedido excluido com sucesso"}
  end

  private 
    def order_params
      #{order: {name: "tomate",qtd_order: "777", price: "12.2",sold: true, date_buy: "2022-12-12",desc: "tomate"}}
      params.require(:order).permit(:name,:qtd_order,:price,:sold,:date_buy, :desc)
    end

    def set_order
      @order = Order.find(params[:id])
    end
end
