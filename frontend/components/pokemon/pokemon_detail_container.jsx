import React from 'react';

import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => ({
  detail: state.detail
});

export default connect(
  mapStateToProps
)(PokemonDetail);
