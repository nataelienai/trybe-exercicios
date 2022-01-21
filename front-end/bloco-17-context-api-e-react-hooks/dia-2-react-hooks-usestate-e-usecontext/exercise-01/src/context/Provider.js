// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [state, setState] = useState({
    cars: {
      red: false,
      blue: false,
      yellow: false,
    },
  });

  function moveCar(car, side) {
    setState({
      cars: {
        ...state.cars,
        [car]: side,
      },
    });
  };

  const context = { ...state, moveCar };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
