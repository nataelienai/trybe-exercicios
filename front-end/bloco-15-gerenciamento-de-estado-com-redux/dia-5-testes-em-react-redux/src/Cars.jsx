import React from 'react';
import { moveCar } from './redux/actions';
import { connect } from 'react-redux';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

function Cars({ redCar, blueCar, yellowCar, moveCar }) {
  return (
    <div>
      <div>
        <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button onClick={() => moveCar('red', !redCar)} type="button" data-testid="move-red-car-btn">move</button>
      </div>
      <div>
        <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" data-testid="blue-car-img" />
        <button onClick={() => moveCar('blue', !blueCar)} type="button"data-testid="move-blue-car-btn">move</button>
      </div>
      <div>
        <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" data-testid="yellow-car-img" />
        <button onClick={() => moveCar('yellow', !yellowCar)} type="button"data-testid="move-yellow-car-btn">move</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  redCar: state.cars.red,
  blueCar: state.cars.blue,
  yellowCar: state.cars.yellow,
});

const mapDispatchToProps = (dispatch) => ({
  moveCar: (car, side) => dispatch(moveCar(car, side)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
