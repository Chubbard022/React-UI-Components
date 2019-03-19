import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import Buttons from './components/ButtonComponents/ActionButton';
import NumberButtons from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div>
      <CalculatorDisplay text='0' />
      <div className='buttons'>
      <NumberButtons />
      <Buttons />
      </div>
    </div>
  );
};

export default App;
