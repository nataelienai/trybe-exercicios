import React from 'react';
import TrafficSignal from './TrafficSignal';
import Cars from './Cars';
import CarsProvider from './context/CarsProvider';
import TrafficProvider from './context/TrafficProvider';
import './App.css';

function App() {
  return (
    <div className="container">
      <CarsProvider>
        <Cars />
      </CarsProvider>
      <TrafficProvider>
        <TrafficSignal />
      </TrafficProvider>
    </div>
  );
}

export default App;
