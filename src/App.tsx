import ticTacToeLogo from '/tic-tac-toe.svg'
import { useState } from 'react';
import Player from './components/Player.tsx';
import { Player as PlayerType } from './types/common.types.ts';
import { GameBoard } from './components/GameBoard.tsx';

function App() {
  const [player_1] = useState<PlayerType>({ id: "100", name: "John", sign: 'X' });
  const [player_2] = useState<PlayerType>({ id: "200", name: "Gosia", sign: 'O' });

  return (
    <>
      <header>
        <h1>Tic-Tac-Toe</h1>
        <img src={ticTacToeLogo} alt="Tic Tac Toe Image" />
      </header>
      <div className="container">
        <div id="playerContainer">
          <Player player={player_1} />
          <Player player={player_2} />
        </div>
        <GameBoard />
      </div>
    </>
  )
}

export default App
