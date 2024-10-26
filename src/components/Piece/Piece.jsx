import { pieceTypeClass } from "../../helpers/pieceClasses";
import css from "./Piece.module.css";

const Piece = ({ rank, file, piece }) => {
  const onDragStart = (evt) => {
    evt.dataTransfer.effectAllowed = "move";
    evt.dataTransfer.setData("text/plain", `${piece},${rank},${file}`);
    setTimeout(() => {
      evt.target.style.display = "none";
    }, 0);
  };

  const onDragEnd = (evt) => {
    evt.target.style.display = "block";
  };

  return (
    <li
      className={`${css.piece} ${pieceTypeClass[piece]} ${
        css["p-" + file + rank]
      }`}
      draggable={true}
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
    />
  );
};

export default Piece;
