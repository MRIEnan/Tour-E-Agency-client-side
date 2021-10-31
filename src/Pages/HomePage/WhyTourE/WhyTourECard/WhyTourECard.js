import React from 'react';
import './WhyTourECard.css';

const WhyTourECard = (props) => {
    const{uIcon,title} = props;
    return (
        <div className="why-tour-e-card">
            <i className={uIcon}></i>
            <h2>{title}</h2>
        </div>
    );
};

export default WhyTourECard;