import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import Buttons from './components/ButtonComponents/ActionButton';
import NumberButtons from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div>
      <CalculatorDisplay />
      <Buttons />
      <NumberButtons />
    </div>
  );
};

export default App;
