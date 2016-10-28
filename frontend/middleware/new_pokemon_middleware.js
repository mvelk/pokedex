import { PUSH_POKEMON, receivePokemon } from '../actions/pokemon_actions';
import { pushPokemon } from '../util/api_util';
import { hashHistory } from 'react-router';


const NewPokemonMiddleware = ({ dispatch }) => next => action => {

  const success = (data) => {
    console.log(data);
    dispatch(receivePokemon(data));
    hashHistory.push(`/pokemon/${data.id}`);
  };

  const error = (err) => {
    console.log(err);
  };

  switch(action.type) {
    case PUSH_POKEMON:
      pushPokemon(action.poke, success, error);
      return next(action);
    default:
      return next(action);
  }
};




export default NewPokemonMiddleware;
