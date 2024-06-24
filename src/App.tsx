import { useState } from 'react';
import Player from './components/Player.tsx';
import { Player as PlayerType } from './types/common.types.ts';
import { GameBoard } from './components/GameBoard.tsx';
import { GameBoard as GameBoardType } from './types/common.types.ts';
import Log from './components/Log.tsx';
import { Logger as LoggerType } from './types/common.types.ts';
import { WINNING_COMBINATIONS } from './utils/winning-combinations.ts';
import GameOver from './components/GameOver.tsx';


const INITIAL_BOARD: GameBoardType = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveWinner(currentBoard: GameBoardType, player1: PlayerType, player2: PlayerType) {
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = currentBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = currentBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = currentBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      return player1.myTurn ? player2.name : player1.name;
    }
  }
  return undefined;
}

function App() {
  const [player1, setPlayer1] = useState<PlayerType>({ id: "100", name: "Player 1", sign: 'X', myTurn: true });
  const [player2, setPlayer2] = useState<PlayerType>({ id: "200", name: "Player 2", sign: 'O', myTurn: false });
  const [currentBoard, setCurrentBoard] = useState<GameBoardType>(INITIAL_BOARD);
  const [logger, setLogger] = useState<LoggerType[]>([]);

  const winner = deriveWinner(currentBoard, player1, player2);

  const draw = logger.length >= 9 && !winner;


  function addSignToBoard(row: number, col: number) {
    const signToAdd = player1.myTurn ? player1.sign : player2.sign;
    setCurrentBoard((prevBoard) => {
      const updatedBoard = [...prevBoard.map(row => [...row])];
      updatedBoard[row][col] = signToAdd;
      return updatedBoard;
    })
  }

  function handleTurn(row: number, col: number) {
    const newLogInfo: LoggerType = {
      square: { row, col },
      currentPlayer: player1.myTurn ? player1.name : player2.name,
    };

    setLogger(prevLogger => {
      return [newLogInfo, ...prevLogger];
    });

    addSignToBoard(row, col);
    setPlayer1(prevPlayer => ({ ...prevPlayer, myTurn: !prevPlayer.myTurn }));
    setPlayer2(prevPlayer => ({ ...prevPlayer, myTurn: !prevPlayer.myTurn }));
  }

  function onPlayerNameChange(playerId: string, playerName: string) {
    if (player1.id === playerId)
      setPlayer1(prevPlayer => ({ ...prevPlayer, name: playerName }));
    else
      setPlayer2(prevPlayer => ({ ...prevPlayer, name: playerName }));
  }

  function handleRestart() {
    setPlayer1(prevPlayer => ({ ...prevPlayer, myTurn: true }))
    setPlayer2(prevPlayer => ({ ...prevPlayer, myTurn: false }))
    setCurrentBoard(() => INITIAL_BOARD);
    setLogger(() => []);
  }

  return (
    <main>
      <header>
        <h1>Tic-Tac-Toe</h1>
      </header>
      <div className="container">
        <div id="playerContainer">
          <Player player={player1} onNameChange={onPlayerNameChange} />
          <Player player={player2} onNameChange={onPlayerNameChange} />
        </div>
        {(winner || draw) && <GameOver playerName={winner} onRestart={handleRestart} />}
        <GameBoard gameBoard={currentBoard} onTurn={handleTurn} />
      </div>
      <Log logCollection={logger} />
    </main>
  )
}

export default App
