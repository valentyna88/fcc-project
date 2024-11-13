import { useState } from 'react';
import ButtonBox from '../ButtonBox/ButtonBox';
import Display from '../Display/Display';
import Layout from '../Layout/Layout';

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');

  return (
    <Layout>
      <Display value={displayValue} />
      <ButtonBox />
    </Layout>
  );
};

export default App;
