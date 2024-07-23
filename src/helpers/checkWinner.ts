const checkWinner = (board: (string | null)[], index: number, boardSize: number): string | null => {
  if (board.every((cell) => cell !== null)) {
    return "tie";
  }

  const size = Math.sqrt(board.length);
  const result: (string | null)[][] = [];
  let item = index
  let row = 0

  for (let i = 0; i < size; i++) {
    result[i] = board.slice(i * size, (i + 1) * size);
  }

  while (item > 0) {
    if (item - boardSize < 0) break

    item = item - boardSize
    row++
  }

  if (
    (result[row][item] === result[row]?.[item + 1] &&
      result[row][item] === result[row]?.[item + 2]) ||
    (result[row][item] === result[row + 1]?.[item] &&
      result[row][item] === result[row + 2]?.[item]) ||
    (result[row][item] === result[row + 1]?.[item + 1] &&
      result[row][item] === result[row + 2]?.[item + 2]) ||
    (result[row][item] === result[row + 1]?.[item - 1] &&
      result[row][item] === result[row + 2]?.[item - 2]) ||
    (result[row][item] === result[row]?.[item - 1] &&
      result[row][item] === result[row]?.[item - 2]) ||
    (result[row][item] === result[row - 1]?.[item - 1] &&
      result[row][item] === result[row - 2]?.[item - 2]) ||
    (result[row][item] === result[row - 1]?.[item] &&
      result[row][item] === result[row - 2]?.[item]) ||
    (result[row][item] === result[row - 1]?.[item + 1] &&
      result[row][item] === result[row - 2]?.[item + 2]) ||
    (result[row][item] === result[row]?.[item + 1] &&
      result[row][item] === result[row]?.[item - 1]) ||
    (result[row][item] === result[row + 1]?.[item] &&
      result[row][item] === result[row - 1]?.[item]) ||
    (result[row][item] === result[row + 1]?.[item + 1] &&
      result[row][item] === result[row - 1]?.[item - 1]) ||
    (result[row][item] === result[row - 1]?.[item + 1] &&
      result[row][item] === result[row + 1]?.[item - 1])
  ) {
    return result[row][item];
  }

  return null;
};

export default checkWinner;
