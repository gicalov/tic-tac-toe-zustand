const checkRange = (size: number | null): boolean =>
  Number(size) < 11 && Number(size) > 2;

export default checkRange;
