import React from 'react';
import './Button.css';

const Buttons = (props)=>{
    return(
        <div className='ButtonComponent__ActionButtons'>
            <p>{props.text}</p>
        </div>
    )
}

export default Buttons;