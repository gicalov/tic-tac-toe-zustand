import create from "zustand";
import { GameState } from "./interfaces";

const useGameStore = create<GameState>((set) => ({
  board: Array(9).fill(null),
  currentPlayer: "✟",
  wins: {
    X: 0,
    O: 0,
    ties: 0,
  },
  winner: null,
  handleClick: (index) => {
    set((state) => {
      if (state.board[index] === null) {
        const newBoard = [...state.board];
        newBoard[index] = state.currentPlayer;
        const winner = checkWinner(newBoard);
        if (winner) {
          // state.winner = true;
          if (winner === "✟") {
            return {
              board: newBoard,
              winner: "✟",
              currentPlayer: state.currentPlayer === "✟" ? "◯" : "✟", //✖
              wins: {
                ...state.wins,
                X: state.wins.X + 1,
              },
            };
          } else if (winner === "◯") {
            return {
              board: newBoard,
              winner: "◯",
              currentPlayer: state.currentPlayer === "✟" ? "◯" : "✟",
              wins: {
                ...state.wins,
                O: state.wins.O + 1,
              },
            };
          } else {
            return {
              board: newBoard,
              currentPlayer: state.currentPlayer === "✟" ? "◯" : "✟",
              wins: {
                ...state.wins,
                ties: state.wins.ties + 1,
              },
            };
          }
        } else {
          return {
            board: newBoard,
            currentPlayer: state.currentPlayer === "✟" ? "◯" : "✟",
          };
        }
      }
      return state;
    });
  },
  resetGame: () => {
    set({ board: Array(9).fill(null), currentPlayer: "✟", winner: null }); //◯
  },
  resetStats: () => {
    set({ wins: { X: 0, O: 0, ties: 0 } });
  },
}));

const checkWinner = (board: (string | null)[]): string | null => {
  const winningCombos: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  if (board.every((cell) => cell !== null)) {
    return "tie";
  }

  return null;
};

export default useGameStore;
