import { getCharacter } from "../../helpers/getCharacter";
import Files from "../Files/Files";
import Ranks from "../Ranks/Ranks";
import css from "./Board.module.css";

const Board = () => {
  const ranks = Array(8)
    .fill()
    .map((x, i) => 8 - i);

  const files = Array(8)
    .fill()
    .map((x, i) => getCharacter(i));

  const getClassName = (i, j) => {
    let c = css.itemTile;
    c += (i + j) % 2 === 0 ? ` ${css["tile--light"]}` : ` ${css["tile--dark"]}`;
    return c;
  };

  return (
    <div className={css.boxBoard}>
      <Ranks ranks={ranks} />

      <ul className={css.listTiles}>
        {ranks.map((rank, i) =>
          files.map((file, j) => (
            <li className={getClassName(i, j)} key={file + "-" + rank}></li>
          ))
        )}
      </ul>

      <Files files={files} />
    </div>
  );
};

export default Board;
