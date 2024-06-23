export interface Player {
  id: string;
  name: string;
  sign: string;
  myTurn: boolean;
}

type Square = {
  row: number;
  col: number;
}

export interface Logger {
  square: Square;
  currentPlayer: string;
}

export type GameBoard = (string | null)[][];