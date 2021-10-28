import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';

class Pokemon extends React.Component {
  render() {
    const pokemonInfo = this.props.pokemonInfo;
    return (
      <section className="pokemon-card">
        <div className="pokemon-info">
          <p>{pokemonInfo.name}</p>
          <p>{pokemonInfo.type}</p>
          <p>
            Average weight: {pokemonInfo.averageWeight.value} {pokemonInfo.averageWeight.measurementUnit}
          </p>
        </div>
        <div className="pokemon-image">
          <img src={pokemonInfo.image} alt={pokemonInfo.name}/>
        </div>
      </section>
    );
  }
}

Pokemon.propTypes = {
  pokemonInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
  })
}

export default Pokemon;
