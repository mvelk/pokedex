import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { Router, Route, hashHistory } from 'react-router';
import { requestAllPokemon, requestDetail } from '../actions/pokemon_actions';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';

const Root = ({store}) => {

  const requestSinglePokemonOnEnter = (nextState) => {
    store.dispatch(requestDetail(nextState.params.pokemonId));
  };

  const requestPokemon = () => {
    store.dispatch(requestAllPokemon());
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={PokemonIndexContainer}>
          <Route path='/pokemon/:pokemonId' component={PokemonDetailContainer} onEnter={requestSinglePokemonOnEnter}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
