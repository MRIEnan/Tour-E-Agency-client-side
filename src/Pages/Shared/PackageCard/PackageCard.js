import React from 'react';
import './PackageCard.css';
import { NavHashLink } from 'react-router-hash-link';


const PackageCard = (props) => {
    const {imageLink,price,days,night,spotName, description,rating,_id} = props.pack;
    const packLink = `spots/${_id}#spot-booking-form`
    return (
        <div className="package-card">
            <div className="package-card-image">
                <img src={imageLink} alt={spotName} />
            </div>
            <div>
                <div className="package-card-top">
                    <h4>${price}/<small>Per Person</small></h4>
                    <h4><small>{days} Days/{night} night</small></h4>
                </div>
                <h2 className="package-card-spotName">{spotName}</h2>
                <p className="package-card-description">{description}</p>
                <div className="package-card-bottom">
                    <p><small>{rating}K+Rating</small></p>
                    <NavHashLink to={packLink}>
                        <div className="btn-regular-container">
                            <h3>Book Now</h3>
                            <div className="btn-regular"></div>
                        </div>
                    </NavHashLink>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;