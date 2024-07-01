import { create } from "zustand";
import checkWinner from "../helpers/checkWinner";
import { GAME_STATE_KEYS } from "../constants";
import { GameState } from "./interfaces";

const useGameStore = create<GameState>((set) => ({
  board: Array(9).fill(null),
  currentPlayer: GAME_STATE_KEYS.PLAYER_1,
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

        return {
          board: newBoard,
          currentPlayer:
            state.currentPlayer === GAME_STATE_KEYS.PLAYER_1
              ? GAME_STATE_KEYS.PLAYER_2
              : GAME_STATE_KEYS.PLAYER_1,
          winner: winner,
          wins: state.handleUpdateWins(winner, state),
        };
      }

      return state;
    });
  },

  handleUpdateWins: (winner, state) => {
    if (winner === GAME_STATE_KEYS.PLAYER_1) {
      return { ...state.wins, X: state.wins.X + 1 };
    }

    if (winner === GAME_STATE_KEYS.PLAYER_2) {
      return { ...state.wins, O: state.wins.O + 1 };
    }

    if (winner === GAME_STATE_KEYS.TIE) {
      return { ...state.wins, ties: state.wins.ties + 1 };
    }

    return state.wins;
  },

  resetGame: () => {
    set({
      board: Array(9).fill(null),
      currentPlayer: GAME_STATE_KEYS.PLAYER_1,
      winner: null,
    });
  },

  resetStats: () => {
    set({ wins: { X: 0, O: 0, ties: 0 } });
  },
}));

export default useGameStore;
