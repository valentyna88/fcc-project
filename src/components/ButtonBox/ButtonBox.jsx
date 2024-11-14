import css from './ButtonBox.module.css';

import Button from '../../components/Button//Button';

const ButtonBox = ({ onButtonClick }) => {
  const buttons = [
    ['1', '2', '3', '+'],
    ['4', '5', '6', '-'],
    ['7', '8', '9', '*'],
    ['0', 'C', '=', '/'],
  ];

  return (
    <div className={css.buttonBox}>
      {buttons.flat().map(label => (
        <Button key={label} label={label} onClick={onButtonClick} />
      ))}
    </div>
  );
};

export default ButtonBox;
