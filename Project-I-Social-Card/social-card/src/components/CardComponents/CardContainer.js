import React from 'react';
import './Card.css';

import CardBanner from './src/components/CardComponents/CardBanner';
import CardContent from './src/components/CardComponents/CardContent';

const CardContainer = ()=>{
    return(
        <div>
            <CardBanner />
            <CardContent />
        </div>
    )
}

export default CardContainer;
