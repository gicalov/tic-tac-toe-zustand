const checkWinner = (board: (string | null)[]): string | null => {
  if (board.every((cell) => cell !== null)) {
    return "tie";
  }

  const size = Math.sqrt(board.length);
  const result: (string | null)[][] = [];

  for (let i = 0; i < size; i++) {
    result[i] = board.slice(i * size, (i + 1) * size);
  }

  for (let row = 0; row < result.length; row++) {
    for (let item = 0; item < result[row].length; item++) {
      if (result[row][item]) {
        if (
          (result[row][item] === result[row]?.[item + 1] &&
            result[row][item] === result[row]?.[item + 2]) ||
          (result[row][item] === result[row + 1]?.[item] &&
            result[row][item] === result[row + 2]?.[item]) ||
          (result[row][item] === result[row + 1]?.[item + 1] &&
            result[row][item] === result[row + 2]?.[item + 2]) ||
          (result[row][item] === result[row + 1]?.[item - 1] &&
            result[row][item] === result[row + 2]?.[item - 2])
        ) {
          return result[row][item];
        }
      }
    }
  }

  return null;
};

export default checkWinner;
