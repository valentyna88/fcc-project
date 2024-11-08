import css from './Button.module.css';

const Button = ({ label, onClick }) => {
  return (
    <button type="button" className={css.button} onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

export default Button;
