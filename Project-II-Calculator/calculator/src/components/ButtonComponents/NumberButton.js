import React from 'react';
import './Button.css';



const NumberButtons = () =>{
    return(
       <div className='ButtonComponent__NumberButtons'>
        <p className='NumberButtons__stretch'>Clear</p>
        <p >9</p>
        <p >8</p>
        <p >7</p>
        <p >6</p>
        <p >5</p>
        <p >4</p>
        <p >3</p>
        <p >2</p>
        <p >1</p>
        <p className='NumberButtons__stretch'>0</p>
       </div>
    )
}


export default NumberButtons;