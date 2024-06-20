export interface Player {
  id: string;
  name: string;
  sign: string;
}

export type GameBoard = (string | null)[][];