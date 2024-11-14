import { useState } from 'react';
import ButtonBox from '../ButtonBox/ButtonBox';
import Display from '../Display/Display';
import Layout from '../Layout/Layout';

const App = () => {
  // Стан для зберігання значення на дисплеї
  const [displayValue, setDisplayValue] = useState('0');

  // Функція для обробки натискань кнопок
  const handleButtonClick = label => {
    // Якщо це цифра, додаємо її до значення дисплея
    if (!isNaN(label)) {
      setDisplayValue(prev => (prev === '0' ? label : prev + label));
    }
  };

  return (
    <Layout>
      <Display value={displayValue} />
      <ButtonBox onButtonClick={handleButtonClick} />
    </Layout>
  );
};

export default App;
