import { GameOverComponentProps } from '../types/components.types';

export default function GameOver({ playerName, onRestart }: GameOverComponentProps) {
  return <div id="game-over">
    <h2>Game Over</h2>
    {playerName && <p>{playerName} Won!!!</p>}
    {!playerName && <p>It is a Draw!!!</p>}
    <button onClick={onRestart}>Play Again!</button>
  </div>
}