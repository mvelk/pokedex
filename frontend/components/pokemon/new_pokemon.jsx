import React from 'react';

class NewPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image_url: "",
      poke_type: "",
      attack: 0,
      defense: 0,
      moves: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.linkState = this.linkState.bind(this);
  }

  linkState(key) {
    switch(key) {
      case "move1":
        return (e) => {
          this.setState({moves: [e.target.value, this.state.moves[1]]});
        };
      case "move2":
        return (e) => {
          this.setState({moves: [this.state.moves[0], e.target.value]});
        };
      default:
        return (e) => {
          this.setState({[key]: e.target.value});
        };
    }
  }


  handleClick(e) {
    e.preventDefault();
    this.props.pushPokemon({ pokemon: this.state });
  }

  render() {
    return (
      <section className="pokemon-detail">
        <img src="/assets/pokemon-logo.png" alt="Copyright of Nintendo Pokemon" />
        <form className="new-pokemon-details">
          <input type="text" onChange={this.linkState('name')} placeholder="Name" />
          <input type="text" onChange={this.linkState('image_url')} placeholder="Image Url" />
          <input type="text" onChange={this.linkState('poke_type')} placeholder="Poke Type" />
          <input type="number" onChange={this.linkState('attack')} placeholder="Attack" />
          <input type="number" onChange={this.linkState('defense')} placeholder="Defense" />
          <input type="text" onChange={this.linkState('move1')} placeholder="Move1" />
          <input type="text" onChange={this.linkState('move2')} placeholder="Move2" />
          <input type="submit" value="Create New Pokemon" onClick={this.handleClick} />
        </form>
      </section>
    );
  }
}

export default NewPokemon;
