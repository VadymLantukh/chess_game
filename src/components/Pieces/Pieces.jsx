import { useRef, useState } from "react";
import { createPosition } from "../../helpers/createPosition";
import Piece from "../Piece/Piece";
import css from "./Pieces.module.css";
import { copyPosition } from "../../helpers/copyPosition";

const Pieces = () => {
  const [position, setPosition] = useState(createPosition());
  const ref = useRef();

  const calcCoords = (evt) => {
    const { width, left, top } = ref.current.getBoundingClientRect();
    const size = width / 8;
    const y = Math.floor((evt.clientX - left) / size);
    const x = 7 - Math.floor((evt.clientY - top) / size);
    return { x, y };
  };

  const onDrop = (evt) => {
    const newPosition = copyPosition(position);
    const { x, y } = calcCoords(evt);
    const [p, rank, file] = evt.dataTransfer.getData("text").split(",");

    newPosition[rank][file] = "";
    newPosition[x][y] = p;

    setPosition(newPosition);
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
      {position.map((r, rank) =>
        r.map((f, file) =>
          position[rank][file] ? (
            <Piece
              key={rank + "-" + file}
              rank={rank}
              file={file}
              piece={position[rank][file]}
            />
          ) : null
        )
      )}
    </ul>
  );
};

export default Pieces;
