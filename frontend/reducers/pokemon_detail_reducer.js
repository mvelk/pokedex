import { RECEIVE_DETAIL } from '../actions/pokemon_actions';
import { merge } from 'lodash';
const PokemonDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DETAIL:
      console.log(action.detail);
      const newState = merge({}, action.detail);
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default PokemonDetailReducer;
