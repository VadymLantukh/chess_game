import { useState } from "react";
import { createPosition } from "../../helpers/createPosition";
import Piece from "../Piece/Piece";
import css from "./Pieces.module.css";

const Pieces = () => {
  const [position, setPosition] = useState(createPosition());

  console.log(position);
  return (
    <ul className={css.listPieces}>
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
