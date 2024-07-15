import { winningCombos } from "../constants";

const checkWinner = (board: (string | null)[]): string | null => {
  console.log(board);
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

export default checkWinner;
