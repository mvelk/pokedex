import PokemonReducer from './pokemon_reducer';
import PokemonDetailReducer from './pokemon_detail_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  pokemon: PokemonReducer,
  detail: PokemonDetailReducer
});
