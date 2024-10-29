import { getRookMove } from "./getMove";

const arbiter = {
  getRegularMoves: function ({ position, piece, rank, file }) {
    return getRookMove({ position, piece, rank, file });
  },
};

export default arbiter;
