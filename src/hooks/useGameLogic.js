import { useState } from 'react';

const useGameLogic = () => {
  const [gameState, setGameState] = useState({});

  const startGame = () => {
    setGameState({ status: 'started' });
  };

  return { gameState, startGame };
};

export default useGameLogic;
