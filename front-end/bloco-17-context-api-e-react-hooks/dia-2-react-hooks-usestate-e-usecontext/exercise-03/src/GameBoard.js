import React, { useContext } from 'react';
import GameCell from './GameCell';
import { GameContext } from './contexts/GameContext';
import './GameBoard.css';

function GameBoard() {
  const { gameBoard } = useContext(GameContext);
  return (
    <div className="game-board">
      {gameBoard.map((playerId, i) => (
        <GameCell id={i} key={i} />
      ))}
    </div>
  );
}

export default GameBoard;
