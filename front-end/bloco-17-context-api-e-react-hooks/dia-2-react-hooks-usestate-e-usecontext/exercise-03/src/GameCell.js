import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from './contexts/GameContext';
import './GameCell.css';
import xImage from './x.png';
import oImage from './o.svg';

function GameCell({ id }) {
  const { gameBoard, updateGameBoard } = useContext(GameContext);
  const content = gameBoard[id];

  if (content === 1) {
    return (
      <div
        data-testid={`cell_${id}`}
        className="game-cell"
        onClick={() => updateGameBoard(id)}
        role="button"
        tabIndex="0"
        aria-label="Cell"
        onKeyPress={() => updateGameBoard(id)}
      >
        <img data-testid={`cell_${id}_image`} alt="X" src={xImage} />
      </div>
    );
  }
  if (content === 2) {
    return (
      <div
        data-testid={`cell_${id}`}
        className="game-cell"
        onClick={() => updateGameBoard(id)}
        role="button"
        tabIndex="0"
        aria-label="Cell"
        onKeyPress={() => updateGameBoard(id)}
      >
        <img data-testid={`cell_${id}_image`} alt="O" src={oImage} />
      </div>
    );
  }
  return (
    <div
      role="button"
      tabIndex="0"
      aria-label="Cell"
      onKeyPress={() => updateGameBoard(id)}
      data-testid={`cell_${id}`}
      className="game-cell"
      onClick={() => updateGameBoard(id)}
    />
  );
}

GameCell.propTypes = {
  id: PropTypes.number.isRequired,
};

export default GameCell;
