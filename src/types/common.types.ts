export interface Player {
  id: string;
  name: string;
  sign: string;
  myTurn: boolean;
}

export type GameBoard = (string | null)[][];