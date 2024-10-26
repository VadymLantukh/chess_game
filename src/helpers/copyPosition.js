export const copyPosition = (position) => {
  const newPosition = new Array(8).fill("").map(() => new Array(8).fill(""));

  for (let rank = 0; rank < 8; rank++) {
    for (let file = 0; file < 8; file++) {
      newPosition[rank][file] = position[rank][file];
    }
  }

  return newPosition;
};
