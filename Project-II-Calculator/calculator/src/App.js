import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import Buttons from './components/ButtonComponents/ActionButton';
import NumberButtons from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
          <div className='Calculator'>
           <CalculatorDisplay text='0' />

           <div className='NumberButtons'>
              <NumberButtons text='Clear' />
              <Buttons text='%'/>
              <NumberButtons text='7' />
              <NumberButtons text='8' />
              <NumberButtons text='9' />
              <Buttons text='x'/>
              <NumberButtons text='4' />
              <NumberButtons text='5' />
              <NumberButtons text='6' />
              <Buttons text='-'/>
              <NumberButtons text='7' />
              <NumberButtons text='8' />
              <NumberButtons text='9' />
              <Buttons text='+'/>
              <NumberButtons  text='0' />
              <Buttons text='='/>
        </div>
      </div>
  );
};

export default App;

