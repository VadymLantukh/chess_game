import { useRef } from "react";
import Piece from "../Piece/Piece";
import css from "./Pieces.module.css";
import { copyPosition } from "../../helpers/copyPosition";
import { useAppContext } from "../../context/context";
import { makeNewMove } from "../../reducer/actions/move";

const Pieces = () => {
  const { appState, dispatch } = useAppContext();
  const currentPosition = appState.position[appState.position.length - 1];
  const ref = useRef();

  const calcCoords = (evt) => {
    const { width, left, top } = ref.current.getBoundingClientRect();
    const size = width / 8;
    const y = Math.floor((evt.clientX - left) / size);
    const x = 7 - Math.floor((evt.clientY - top) / size);
    return { x, y };
  };

  const onDrop = (evt) => {
    const newPosition = copyPosition(currentPosition);
    const { x, y } = calcCoords(evt);
    const [p, rank, file] = evt.dataTransfer.getData("text").split(",");

    newPosition[rank][file] = "";
    newPosition[x][y] = p;

    dispatch(makeNewMove({ newPosition }));
  };

  const onDragOver = (evt) => {
    evt.preventDefault();
  };

  return (
    <ul
      className={css.listPieces}
      onDrop={onDrop}
      onDragOver={onDragOver}
      ref={ref}
    >
      {currentPosition.map((r, rank) =>
        r.map((f, file) =>
          currentPosition[rank][file] ? (
            <Piece
              key={rank + "-" + file}
              rank={rank}
              file={file}
              piece={currentPosition[rank][file]}
            />
          ) : null
        )
      )}
    </ul>
  );
};

export default Pieces;
