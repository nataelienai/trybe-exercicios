import React from 'react';
import PropTypes from 'prop-types';
import CarsContext from './CarContext';

class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    };

    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState((state) => ({
      cars: {
        ...state.cars,
        [car]: side,
      },
    }));
  }

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
    };

    const { children } = this.props;

    return (
      <CarsContext.Provider value={ context }>
        {children}
      </CarsContext.Provider>
    )
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
