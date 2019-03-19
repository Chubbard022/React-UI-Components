import React from 'react';
import './Display.css';



const CalculatorDisplay = (props) =>{
    return(
        <p className='CalculatorDisplay'>{props.text}</p>
    )
}

export default CalculatorDisplay;