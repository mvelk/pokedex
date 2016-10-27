import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { Router, Route, hashHistory } from 'react-router';
import { requestAllPokemon } from '../actions/pokemon_actions';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';

const Root = ({store}) => {
  const requestOnEnter = () => {
    store.dispatch(requestAllPokemon());
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={PokemonIndexContainer} onEnter={requestOnEnter}/>
        <Route path='/' component={PokemonDetailContainer} onEnter={requestOnEnter}/>
      </Router>
    </Provider>
  );
};

export default Root;
