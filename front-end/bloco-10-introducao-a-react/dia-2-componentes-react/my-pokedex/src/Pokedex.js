import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css';

class Pokedex extends React.Component {
  render() {
    const pokemons = this.props.pokemons;

    return (
      <article className="pokedex">
        <h1>Pokedex</h1>
        <section className="pokemon-card-section">
          {pokemons.map(pokemon => <Pokemon pokemonInfo={pokemon} key={pokemon.id}/>)}
        </section>
      </article>
    );
  }
}

export default Pokedex;
