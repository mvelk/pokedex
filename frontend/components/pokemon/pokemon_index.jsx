import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

// const PokemonIndex = ({pokemon, children}) => {
//   return(
//     <ul>
//       {children}
//       {pokemon.map((poke, index) => (<PokemonIndexItem key={index} pokemon={poke}/>))}
//     </ul>
//   );
// };

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <ul>
        {this.props.children}
        { this.props.pokemon.map((poke, index) => (<PokemonIndexItem key={index} pokemon={poke}/>))}
      </ul>
    );
  }
}

export default PokemonIndex;
