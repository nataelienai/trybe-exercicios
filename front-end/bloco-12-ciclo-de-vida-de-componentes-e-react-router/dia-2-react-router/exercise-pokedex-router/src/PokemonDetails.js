import React from 'react';
import Pokemon from './Pokemon';

class PokemonDetails extends React.Component {
  render() {
    const { pokemons, match: { params: { id } } } = this.props;
    const pokemon = pokemons.find((pokemon) => pokemon.id === Number(id));

    return (
      <div>
        <h2>{ pokemon.name } Details</h2>
        <Pokemon pokemon={ pokemon } moreDetails={ false } />
        <div>
          <h3>Summary</h3>
          { pokemon.summary }
        </div>
        <div>
          <h3>Game locations of { pokemon.name }</h3>
          {pokemon.foundAt.map(({ map }) => (
            <img 
              key={ map }
              src={ map }
              alt={ `Location where ${pokemon.name} can be found at.` }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default PokemonDetails;
