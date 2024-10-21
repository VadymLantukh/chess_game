import css from "./Ranks.module.css";

const Ranks = ({ ranks }) => {
  return (
    <ul className={css.listRanks}>
      {ranks.map((rank) => (
        <span key={rank}>{rank}</span>
      ))}
    </ul>
  );
};

export default Ranks;
