import React from 'react';

import { connect } from 'react-redux';
import { pushPokemon } from '../../actions/pokemon_actions';
import NewPokemon from './new_pokemon';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  console.log(dispatch);
  return ({
  pushPokemon: (poke) => dispatch(pushPokemon(poke))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPokemon);
