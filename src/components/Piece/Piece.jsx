import { pieceTypeClass } from "../../helpers/pieceClasses";
import css from "./Piece.module.css";

const Piece = ({ rank, file, piece }) => {
  return (
    <li className={`${css.piece} ${pieceTypeClass[piece]} p-${rank}${file}`} />
  );
};

export default Piece;
