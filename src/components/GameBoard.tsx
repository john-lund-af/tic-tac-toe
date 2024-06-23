import { GameboardComponentProps } from '../types/components.types';

export function GameBoard({ gameBoard, onTurn }: GameboardComponentProps) {
  return <ol id="gameBoard">
    {gameBoard.map((row, rowIndex) => <li key={rowIndex}><ol>
      {row.map((col, colIndex) => <li className={col ? 'disabled' : undefined} key={colIndex} onClick={() => { !col && onTurn(rowIndex, colIndex) }}>{col}</li>)}
    </ol></li>)}
  </ol>
}