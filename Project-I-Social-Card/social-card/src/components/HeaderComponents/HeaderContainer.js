import React from 'react';
import './Header.css';

import HeaderContent from './components/HeaderContent';
import ImageThumbnail from './components/ImageThumbnail';
import HeaderTitle from './components/HeaderTitle';


const HeaderContainer = () =>{
    return(
    <div>
    <ImageThumbnail />
    <HeaderTitle />
    <HeaderContent />
    </div>
    )
}


export default HeaderContainer;