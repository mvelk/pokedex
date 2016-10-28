import { RECEIVE_ALL_POKEMON, receivePokemon, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const PokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_POKEMON:
      newState = merge({}, state);
      newState[action.poke.id] = action.poke;
      return newState;
    case RECEIVE_ALL_POKEMON:
      newState = merge({}, action.pokemon);
      return newState;
    default:
      return state;
  }
};

export default PokemonReducer;
