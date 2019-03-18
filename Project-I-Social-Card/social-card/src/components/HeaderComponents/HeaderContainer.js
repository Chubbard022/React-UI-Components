import React from 'react';
import './Header.css';

import HeaderContent from './src/components/HeaderComponents/HeaderContent';
import ImageThumbnail from './src/components/HeaderComponents/ImageThumbnail';
import HeaderTitle from './src/components/HeaderComponents/HeaderTitle';


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