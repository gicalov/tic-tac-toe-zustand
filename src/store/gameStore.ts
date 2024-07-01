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
        if (winner) {
          if (winner === GAME_STATE_KEYS.PLAYER_1) {
            return {
              board: newBoard,
              winner: GAME_STATE_KEYS.PLAYER_1,
              currentPlayer:
                state.currentPlayer === GAME_STATE_KEYS.PLAYER_1
                  ? GAME_STATE_KEYS.PLAYER_2
                  : GAME_STATE_KEYS.PLAYER_1,
              wins: {
                ...state.wins,
                X: state.wins.X + 1,
              },
            };
          } else if (winner === GAME_STATE_KEYS.PLAYER_2) {
            return {
              board: newBoard,
              winner: GAME_STATE_KEYS.PLAYER_2,
              currentPlayer:
                state.currentPlayer === GAME_STATE_KEYS.PLAYER_1
                  ? GAME_STATE_KEYS.PLAYER_2
                  : GAME_STATE_KEYS.PLAYER_1,
              wins: {
                ...state.wins,
                O: state.wins.O + 1,
              },
            };
          } else {
            return {
              board: newBoard,
              currentPlayer:
                state.currentPlayer === GAME_STATE_KEYS.PLAYER_1
                  ? GAME_STATE_KEYS.PLAYER_2
                  : GAME_STATE_KEYS.PLAYER_1,
              wins: {
                ...state.wins,
                ties: state.wins.ties + 1,
              },
            };
          }
        } else {
          return {
            board: newBoard,
            currentPlayer:
              state.currentPlayer === GAME_STATE_KEYS.PLAYER_1
                ? GAME_STATE_KEYS.PLAYER_2
                : GAME_STATE_KEYS.PLAYER_1,
          };
        }
      }
      return state;
    });
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
