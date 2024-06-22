import { Player } from './common.types';
import { GameBoard } from './common.types';

export interface PlayerComponentProps {
  player: Player;
  onNameChange: (playerId: string, playerName: string) => void;
}

export interface GameboardComponentProps {
  gameBoard: GameBoard;
  onTurn: (row: number, col: number) => void;
}