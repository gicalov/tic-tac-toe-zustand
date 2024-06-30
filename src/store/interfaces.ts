export interface GameState {
  board: (string | null)[];
  currentPlayer: string;
  wins: {
    X: number;
    O: number;
    ties: number;
  };
  winner: string | null;
  handleClick: (index: number) => void;
  resetGame: () => void;
  resetStats: () => void;
}
