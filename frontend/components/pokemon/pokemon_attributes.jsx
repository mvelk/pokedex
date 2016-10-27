import React from 'react';

const PokemonAttributes = ({ detail }) => {
  console.log(detail);
  console.log(detail.moves);
  return(
  <ul>
    <img src={detail.image_url} />
    <li><h2>{detail.name}</h2></li>
    <li>Type: {detail.poke_type}</li>
    <li>Attack: {detail.attack}</li>
    <li>Defense: {detail.defense}</li>
    <li>Moves:
      <ul>
        {detail.moves.map((move, idx) => (<li key={idx}>{move}</li>))}
      </ul>
    </li>
  </ul>
);
};

export default PokemonAttributes;
