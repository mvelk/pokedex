import { fetchDetail } from '../util/api_util';
import { REQUEST_DETAIL, receiveDetail } from '../actions/pokemon_actions';

const error = err => { console.log(err); };

const PokemonDetailMiddleware = ({dispatch}) => next => action => {
  switch(action.type) {
    case REQUEST_DETAIL:
      const success = data => { dispatch(receiveDetail(data)); };
      fetchDetail(action.id, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonDetailMiddleware;
