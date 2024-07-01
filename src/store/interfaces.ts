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
  handleUpdateWins: (
    winner: string | null,
    state: GameState
  ) => {
    X: number;
    O: number;
    ties: number;
  };
  resetGame: () => void;
  resetStats: () => void;
}
