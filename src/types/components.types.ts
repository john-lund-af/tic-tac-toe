import { Player } from './common.types';
import { GameBoard } from './common.types';

export interface PlayerComponentProps {
  player: Player;
}

export interface GameboardComponentProps {
  gameBoard: GameBoard;
  onTurn: () => void;
}