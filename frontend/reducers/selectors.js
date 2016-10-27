import { values } from 'lodash';

export const selectAllPokemon = (state = { pokemon: {}}) => {
  return _.values(state.pokemon);
};
