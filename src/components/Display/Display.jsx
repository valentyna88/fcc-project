import css from './Display.module.css';

const Display = ({ value }) => {
  return <div className={css.display}>{value}</div>;
};

export default Display;
