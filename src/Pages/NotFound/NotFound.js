import { faSadTear } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import './NotFound.css';

const NotFound = () => {
    return(
        <div className="not-found-container">
            <FontAwesomeIcon className="not-found-icon" icon={faSadTear}/>
            <h3>Opps! result not found. please return to <NavHashLink className="not-found-return-button" to="/home#home-top-bonner">Home</NavHashLink></h3>
        </div>
    )
}

export default NotFound;