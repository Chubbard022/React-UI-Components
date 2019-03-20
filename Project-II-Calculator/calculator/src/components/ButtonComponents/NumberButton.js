import React from 'react';
import './Button.css';



const NumberButtons = (props) =>{
    return(
       <div className='ButtonComponent__NumberButtons bigButton'>
        <p>{props.text}</p>
       </div>
    )
}


export default NumberButtons;