import React from 'react';

const PokemonAttributes = ({ detail }) => {
  return(
  <ul>
    <img src={detail.image_url} />
    <li><h2>{detail.name}</h2></li>
    <li>Type: {detail.poke_type}</li>
    <li>Attack: {detail.attack}</li>
    <li>Defense: {detail.defense}</li>
    <li>Moves:
      {detail.moves.join(', ')}
    </li>
  </ul>
);
};

export default PokemonAttributes;
