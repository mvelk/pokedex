import { applyMiddleware } from 'redux';
import PokemonMiddleware from './pokemon_middleware';
import PokemonDetailMiddleware from './detail_middleware';
import NewPokemonMiddleware from './new_pokemon_middleware';

export default applyMiddleware(
  PokemonMiddleware,
  PokemonDetailMiddleware,
  NewPokemonMiddleware
);
