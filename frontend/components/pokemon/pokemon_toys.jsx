import React from 'react';

const PokemonToys = ({toys}) => (
  <ul className="toy-list">
    {toys.map((toy, idx) => (
      <li key={idx}>
        <img className="toy" alt={toy.name} src={toy.image_url} />
      </li>
    ))}
  </ul>
);

export default PokemonToys;
