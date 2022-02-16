import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export function GameProvider({ children }) {
  const [state, setState] = useState({
    activePlayer: 1,
    gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  });

  function victoryArchivedInLine(gameBoard) {
    for (let i = 0; i <= 6; i += 3) {
      if (
        gameBoard[i] === gameBoard[i + 1] &&
        gameBoard[i + 1] === gameBoard[i + 2] &&
        gameBoard[i] !== 0
      )
        return gameBoard[i];
    }
    return false;
  }

  function victoryArchivedInColumn(gameBoard) {
    for (let i = 0; i <= 2; i += 1) {
      if (
        gameBoard[i] === gameBoard[i + 3] &&
        gameBoard[i + 3] === gameBoard[i + 6] &&
        gameBoard[i] !== 0
      )
        return gameBoard[i];
    }
    return false;
  }

  function victoryArchivedInDiagonals(gameBoard) {
    if (gameBoard[4] === 0) return false;
    if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
      return gameBoard[0];
    }
    if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
      return gameBoard[2];
    }
    return false;
  }

  function resetGame() {
    setState({
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    });
  }

  function toggleActivePlayer() {
    const { activePlayer } = state;
    if (activePlayer === 1) return 2;
    return 1;
  }

  function updateGameBoard(cellClicked) {
    setState((state) => {
      const newBoard = [...state.gameBoard];
      let newActivePlayer = state.activePlayer;

      if (state.gameBoard[cellClicked] === 0) {
        newBoard[cellClicked] = state.activePlayer;
        newActivePlayer = toggleActivePlayer();
      } else newBoard[cellClicked] = state.gameBoard[cellClicked];

      return {
        activePlayer: newActivePlayer,
        gameBoard: newBoard,
      };
    });
  }

  function victoryAchieved() {
    const { gameBoard } = state;

    return (
      victoryArchivedInLine(gameBoard) ||
      victoryArchivedInColumn(gameBoard) ||
      victoryArchivedInDiagonals(gameBoard)
    );
  }

  const context = {
    ...state,
    resetGame,
    updateGameBoard,
    victoryAchieved,
  };

  return (
    <GameContext.Provider value={context}>{children}</GameContext.Provider>
  );
}
