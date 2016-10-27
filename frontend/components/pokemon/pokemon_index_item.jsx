import React from 'react';
import { withRouter } from 'react-router';

const PokemonIndexItem = (props) => {
  const handleClick = url => e => props.router.push(url);

  return(
    <li onClick={handleClick(`/pokemon/${props.pokemon.id}`)}>
      <img className="thumbnail" src={props.pokemon.image_url}/> {props.pokemon.name}
    </li>
  );
};

export default withRouter(PokemonIndexItem);
