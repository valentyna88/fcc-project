const Button = ({ label, onClick }) => {
  return (
    <button type="button" onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

export default Button;
