import { fetchAllPokemon } from '../util/api_util';
import { REQUEST_ALL_POKEMON, receiveAllPokemon } from '../actions/pokemon_actions';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  const error = (err) => {
    console.log(err);
  };
  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      const success = (data) => {
        dispatch(receiveAllPokemon(data));
      };
      fetchAllPokemon(success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
