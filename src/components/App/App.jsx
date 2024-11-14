import { useState } from 'react';
import ButtonBox from '../ButtonBox/ButtonBox';
import Display from '../Display/Display';
import Layout from '../Layout/Layout';

// Крок 1: Додавання стану (state) для відображення результатів
// Крок 2: Передача значення дисплею в компонент Display
// Крок 3: Додавання функції для оновлення значення дисплея
// Крок 4: Передача функції handleButtonClick в ButtonBox
// Крок 5: Використання onClick у Button
// Крок 6: Додавання логіки для операторів

const App = () => {
  // Крок 1: Додавання стану (state) для відображення результатів
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null); // Зберігає поточний оператор
  const [previousValue, setPreviousValue] = useState(null); // Зберігає попереднє значення для обчислень
  const [waitingForNewValue, setWaitingForNewValue] = useState(false); // Додаємо стан, щоб чекати нове значення

  // Крок 3: Додавання функції для оновлення значення дисплея
  const handleButtonClick = label => {
    if (!isNaN(label)) {
      // Якщо натиснуто цифру
      setDisplayValue(prev =>
        waitingForNewValue ? label : prev === '0' ? label : prev + label
      );
      setWaitingForNewValue(false); // Після введення числа більше не чекаємо нового значення
    } else if (label === 'C') {
      // Очищення дисплея
      setDisplayValue('0');
      setOperator(null);
      setPreviousValue(null);
      setWaitingForNewValue(false);
    } else if (['+', '-', '*', '/'].includes(label)) {
      // Якщо натиснуто оператор
      setOperator(label);
      setPreviousValue(displayValue); // Зберігаємо поточне значення дисплея як попереднє значення
      setWaitingForNewValue(true); // Встановлюємо прапорець для очікування нового значення
    } else if (label === '=') {
      // Обчислення результату
      if (operator && previousValue !== null) {
        const current = parseFloat(displayValue);
        const previous = parseFloat(previousValue);
        let result;

        switch (operator) {
          case '+':
            result = previous + current;
            break;
          case '-':
            result = previous - current;
            break;
          case '*':
            result = previous * current;
            break;
          case '/':
            result = current !== 0 ? previous / current : 'Error';
            break;
          default:
            break;
        }
        setDisplayValue(result.toString());
        setOperator(null);
        setPreviousValue(null);
        setWaitingForNewValue(false); // Після обчислення не чекаємо нового значення
      }
    }
  };

  return (
    <Layout>
      {/* Крок 2: Передача значення дисплею в компонент Display */}
      <Display value={displayValue} />
      {/* Крок 4: Передача функції handleButtonClick в ButtonBox */}
      <ButtonBox onButtonClick={handleButtonClick} />
    </Layout>
  );
};

export default App;
