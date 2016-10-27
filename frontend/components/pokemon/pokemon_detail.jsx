import React from 'react';
import PokemonAttributes from './pokemon_attributes';

const PokemonDetail = ({ detail }) => {
  return (
    <section className="pokemon-detail">
      <PokemonAttributes detail={detail} />
      <PokemonToys toys={detail.items} />
    </section>
  );
};

export default PokemonDetail;
