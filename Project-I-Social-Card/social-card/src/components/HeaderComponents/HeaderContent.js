import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle.js'

const HeaderContent = () =>{
    return(
        <div className = 'header-item'>
        <HeaderTitle />

        <p className='header-content'>Let's learn React by building a simple interfaces with Components. Don't try to overthink it, just
            keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering react
        </p>
        </div>
    )
}

export default HeaderContent;