import React from 'react';
import App from '../App';
import renderWithRedux from './helpers';
import userEvent from '@testing-library/user-event';

describe('Cars component', () => {
  it('should render all car images', () => {
    const { getByRole } = renderWithRedux(<App />);

    const redCarImage = getByRole('img', { name: /red car/i });
    expect(redCarImage).toBeDefined();

    const blueCarImage = getByRole('img', { name: /blue car/i });
    expect(blueCarImage).toBeDefined();

    const yellowCarImage = getByRole('img', { name: /yellow car/i });
    expect(yellowCarImage).toBeDefined();
  });

  it('should render all move buttons', () => {
    const { getByTestId } = renderWithRedux(<App />);

    const moveRedCarButton = getByTestId('move-red-car-btn');
    expect(moveRedCarButton).toBeDefined();

    const moveBlueCarButton = getByTestId('move-blue-car-btn');
    expect(moveBlueCarButton).toBeDefined();

    const moveYellowCarButton = getByTestId('move-yellow-car-btn');
    expect(moveYellowCarButton).toBeDefined();
  });

  it('should move the car when its button is clicked', () => {
    const { getByRole, getByTestId } = renderWithRedux(<App />);

    const redCarImage = getByRole('img', { name: /red car/i });
    const moveRedCarButton = getByTestId('move-red-car-btn');

    expect(redCarImage).toHaveProperty('className', 'car-left');
    userEvent.click(moveRedCarButton);
    expect(redCarImage).toHaveProperty('className', 'car-right');
    userEvent.click(moveRedCarButton);
    expect(redCarImage).toHaveProperty('className', 'car-left');

    const blueCarImage = getByRole('img', { name: /blue car/i });
    const moveBlueCarButton = getByTestId('move-blue-car-btn');

    expect(blueCarImage).toHaveProperty('className', 'car-left');
    userEvent.click(moveBlueCarButton);
    expect(blueCarImage).toHaveProperty('className', 'car-right');
    userEvent.click(moveBlueCarButton);
    expect(blueCarImage).toHaveProperty('className', 'car-left');

    const yellowCarImage = getByRole('img', { name: /yellow car/i });
    const moveYellowCarButton = getByTestId('move-yellow-car-btn');

    expect(yellowCarImage).toHaveProperty('className', 'car-left');
    userEvent.click(moveYellowCarButton);
    expect(yellowCarImage).toHaveProperty('className', 'car-right');
    userEvent.click(moveYellowCarButton);
    expect(yellowCarImage).toHaveProperty('className', 'car-left');
  });
});
