import React from 'react';
import PokemonIndexItem from './pokemon_index_item';


class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <section className="pokemon-index">
        <ul className="pokemon-list">
          {this.props.pokemon.map((poke, index) => (<PokemonIndexItem key={index} pokemon={poke}/>))}
        </ul>
        {this.props.children}
      </section>
    );
  }
}

export default PokemonIndex;
