import { getCharacter } from "../../helpers/getCharacter";
import css from "./Files.module.css";

const Files = ({ files }) => {
  return (
    <ul className={css.listFiles}>
      {files.map((file) => (
        <span className={css.fileSpan} key={file}>
          {getCharacter(file)}
        </span>
      ))}
    </ul>
  );
};

export default Files;
