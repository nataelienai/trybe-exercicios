import React from 'react';
import PropTypes from 'prop-types';

const renderOptions = (options) => (
  options.map((option) => (
    <option key={ option } value={ option }>
      { option }
    </option>
  ))
);

const Selector = ({ value, onChange, options }) => (
  <span>
    <h1>{`Selected: ${value}`}</h1>
    <select
      value={ value }
      onChange={ (event) => onChange(event.target.value) }
    >
      {renderOptions(options)}
    </select>
  </span>
);

Selector.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  value: PropTypes.string.isRequired,
};

export default Selector;
