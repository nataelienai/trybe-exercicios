import React, { useContext } from 'react';
import GameBoard from './GameBoard';
import { GameContext } from './contexts/GameContext';

function TicTacToe() {
  const { gameBoard, resetGame, victoryAchieved } = useContext(GameContext);

  function renderButton() {
    return (
      <button type="button" onClick={resetGame} data-testid="restart-button">
        Recomeçar Jogo
      </button>
    );
  }

  const win = victoryAchieved();

  if (!gameBoard.includes(0) && !win) {
    return (
      <>
        {renderButton()}
        <h1>Empate</h1>
      </>
    );
  }

  return (
    <>
      {renderButton()}
      {!win ? (
        <GameBoard />
      ) : (
        <h1>{`Player ${win === 2 ? 'O' : 'X'} Ganhou`}</h1>
      )}
    </>
  );
}

export default TicTacToe;
