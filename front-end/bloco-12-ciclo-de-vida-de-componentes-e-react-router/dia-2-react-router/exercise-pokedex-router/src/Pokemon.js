import React from 'react';
import { Link } from 'react-router-dom';
import './pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { id, name, type, averageWeight, image }, moreDetails } = this.props;
    return (
      <div className="pokemon">
        <div>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>
            Average weight: { `${averageWeight.value} ${averageWeight.measurementUnit}` }
          </p>
          { moreDetails && <Link to={ `/pokemons/${id}` }>More details</Link> }
        </div>
        <img src={ image } alt={ `${name} sprite` } />
      </div>
    );
  }
}

export default Pokemon;
