import './Pokedex.css';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';
import React from 'react';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: props.pokemons,
      pokemon: props.pokemons[0],
      index: 0,
    };

    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterType = this.filterType.bind(this);
  }

  nextPokemon() {
    this.setState((currentState, _props) => {
      const nextIndex = (currentState.index + 1) % currentState.pokemons.length;

      return {
        pokemons: currentState.pokemons,
        pokemon: currentState.pokemons[nextIndex],
        index: nextIndex,
      };
    });
  }

  filterType(type) {
    let filteredPokemons = this.props.pokemons;

    if (type) {
      filteredPokemons = this.props.pokemons.filter((pokemon) => pokemon.type === type);
    }

    this.setState({
      pokemons: filteredPokemons,
      pokemon: filteredPokemons[0],
      index: 0,
    });
  }

  render() {
    return (
      <>
        <div className="pokedex">
          <Pokemon key={ this.state.pokemon.name } pokemon={ this.state.pokemon } />
        </div>
        <div>
          <button className="filter-btn" onClick={ () => this.filterType() }>All</button>
          <button className="filter-btn" onClick={ () => this.filterType('Fire') }>Fire</button>
          <button className="filter-btn" onClick={ () => this.filterType('Psychic') }>Psychic</button>
        </div>
        <button className="next-btn" onClick={ this.nextPokemon }>Próximo</button>
      </>
    );
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default Pokedex;
