// src/TrafficSignal.jsx

import React from 'react';
import TrafficContext from './context/TrafficContext'
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

class TrafficSignal extends React.Component {
  render() {
    const { changeSignal, signal } = this.context;
    return (
      <div>
        <div className="button-container">
          <button onClick={() => changeSignal('red')} type="button">
            Red
          </button>
          <button onClick={() => changeSignal('yellow')} type="button">
            Yellow
          </button>
          <button onClick={() => changeSignal('green')} type="button">
            Green
          </button>
        </div>
        <img className="signal" src={renderSignal(signal.color)} alt="" />
      </div>
    );
  }
};

TrafficSignal.contextType = TrafficContext;

export default TrafficSignal;
