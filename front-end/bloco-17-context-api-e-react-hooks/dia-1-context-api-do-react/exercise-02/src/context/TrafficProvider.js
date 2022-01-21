import React from 'react';
import TrafficContext from './TrafficContext';

class TrafficProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signal: { color: 'red' },
    };

    this.changeSignal = this.changeSignal.bind(this);
  }

  changeSignal(color) {
    this.setState((state) => ({
      signal: { ...state.signal, color },
    }));
  }

  render() {
    const context = {
      ...this.state,
      changeSignal: this.changeSignal,
    };

    const { children } = this.props;

    return (
      <TrafficContext.Provider value={ context }>
        {children}
      </TrafficContext.Provider>
    )
  }
}

export default TrafficProvider;
