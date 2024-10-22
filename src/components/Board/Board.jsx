import Files from "../Files/Files";
import Pieces from "../Pieces/Pieces";
import Ranks from "../Ranks/Ranks";
import css from "./Board.module.css";

const Board = () => {
  const ranks = Array(8)
    .fill()
    .map((x, i) => 8 - i);

  const files = Array(8)
    .fill()
    .map((x, i) => i + 1);

  const getClassName = (i, j) => {
    let c = css.itemTile;
    c += (i + j) % 2 === 0 ? ` ${css["tile--dark"]}` : ` ${css["tile--light"]}`;
    return c;
  };

  return (
    <div className={css.boxBoard}>
      <Ranks ranks={ranks} />

      <ul className={css.listTiles}>
        {ranks.map((rank, i) =>
          files.map((file, j) => (
            <li className={getClassName(9 - i, j)} key={file + "-" + rank}></li>
          ))
        )}
      </ul>

      <Pieces />
      <Files files={files} />
    </div>
  );
};

export default Board;
