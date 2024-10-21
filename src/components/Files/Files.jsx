import css from "./Files.module.css";

const Files = ({ files }) => {
  return (
    <ul className={css.listFiles}>
      {files.map((file) => (
        <span key={file}>{file}</span>
      ))}
    </ul>
  );
};

export default Files;
