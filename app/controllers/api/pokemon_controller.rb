class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render json: @pokemon, status: 200
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  def update
    @pokemon = Pokemon.find(params[:id])
    if @pokemon.update(pokemon_params)
      render json: @pokemon, status: 200
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  def show
    @pokemon = Pokemon.find(params[:id])
  end

  def destroy
    @pokemon = Pokemon.find(params[:id])
    @pokemon.destroy
    render json: @pokemon, status: 200
  end

  private
  def pokemon_params
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :moves, :image_url)
  end
end
