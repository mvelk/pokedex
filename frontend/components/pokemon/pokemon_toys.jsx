import React from 'react';

const PokemonToys = ({toys}) => (
  <ul className="toy-list">
    {toys.map((toy, idx) => (
      <li key={idx}>
        <img src={toy.image_url} />
        {toy.name}
      </li>
    ))}
  </ul>
);

export default PokemonToys;
