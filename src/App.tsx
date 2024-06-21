import ticTacToeLogo from '/tic-tac-toe.svg'
import { useState } from 'react';
import Player from './components/Player.tsx';
import { Player as PlayerType } from './types/common.types.ts';
import { GameBoard } from './components/GameBoard.tsx';
import { GameBoard as GameBoardType } from './types/common.types.ts';

const initialBoard: GameBoardType = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [player1, setPlayer1] = useState<PlayerType>({ id: "100", name: "John", sign: 'X', myTurn: true });
  const [player2, setPlayer2] = useState<PlayerType>({ id: "200", name: "Gosia", sign: 'O', myTurn: false });
  const [board, setBoard] = useState<GameBoardType>(initialBoard);

  function addSignToBoard(row: number, col: number) {
    const signToAdd = player1.myTurn ? player1.sign : player2.sign;
    setBoard((prevBoard) => {
      const updatedBoard = [...prevBoard.map(row => [...row])];
      updatedBoard[row][col] = signToAdd;
      return updatedBoard;
    })
  }

  function handleTurn(row: number, col: number) {
    addSignToBoard(row, col);
    setPlayer1(prevPlayer => ({ ...prevPlayer, myTurn: !prevPlayer.myTurn }));
    setPlayer2(prevPlayer => ({ ...prevPlayer, myTurn: !prevPlayer.myTurn }));
  }

  return (
    <>
      <header>
        <h1>Tic-Tac-Toe</h1>
        <img src={ticTacToeLogo} alt="Tic Tac Toe Image" />
      </header>
      <div className="container">
        <div id="playerContainer">
          <Player player={player1} />
          <Player player={player2} />
        </div>
        <GameBoard gameBoard={board} onTurn={handleTurn} />
      </div>
    </>
  )
}

export default App
