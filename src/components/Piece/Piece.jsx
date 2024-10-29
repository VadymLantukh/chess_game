import arbiter from "../../arbiter/arbiter";
import { useAppContext } from "../../context/context";
import { pieceTypeClass } from "../../helpers/pieceClasses";
import { generateCandidateMoves } from "../../reducer/actions/move";
import css from "./Piece.module.css";

const Piece = ({ rank, file, piece }) => {
  const { appState, dispatch } = useAppContext();
  const { turn, position } = appState;
  const currentPosition = position[position.length - 1];

  const onDragStart = (evt) => {
    evt.dataTransfer.effectAllowed = "move";
    evt.dataTransfer.setData("text/plain", `${piece},${rank},${file}`);
    setTimeout(() => {
      evt.target.style.display = "none";
    }, 0);

    if (turn === piece[0]) {
      const candidateMoves = arbiter.getRegularMoves({
        position: currentPosition,
        piece,
        rank,
        file,
      });
      dispatch(generateCandidateMoves(candidateMoves));
    }
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
