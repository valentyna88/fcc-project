// import css from './ButtonBox.module.css';
import Button from '../../components/Button//Button';

const ButtonBox = () => {
  const buttons = [
    ['1', '2', '3', '+'],
    ['4', '5', '6', '-'],
    ['7', '8', '9', '*'],
    ['0', 'C', '=', '/'],
  ];

  return (
    <div>
      {buttons.map((row, index) => (
        <div key={index}>
          {row.map(label => (
            <Button key={label} label={label} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ButtonBox;
