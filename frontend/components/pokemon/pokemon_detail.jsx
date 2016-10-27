import React from 'react';
import PokemonAttributes from './pokemon_attributes';
import PokemonToys from './pokemon_toys';
const PokemonDetail = ({ detail }) => {
  if (typeof detail.image_url !== "undefined") {
    return(
      <section className="pokemon-detail">
        <PokemonAttributes detail={detail} />
        <h3>Toys</h3>
        <PokemonToys toys={detail.items} />
      </section>
    );
  } else {
    return (<div></div>);
  }
};

export default PokemonDetail;
