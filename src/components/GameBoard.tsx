
const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export function GameBoard() {
  return <ol id="gameBoard">
    {initialBoard.map((row, rowIndex) => <li key={rowIndex}><ol>
      {row.map((col, colIndex) => <li key={colIndex}>{col}</li>)}
    </ol></li>)}
  </ol>
}