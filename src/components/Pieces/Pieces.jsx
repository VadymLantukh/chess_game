import Piece from "../Piece/Piece";
import css from "./Pieces.module.css";

const Pieces = () => {
  const position = new Array(8).fill("").map((x) => new Array(8).fill(""));

  position[0][0] = "wr";
  position[7][7] = "br";

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
