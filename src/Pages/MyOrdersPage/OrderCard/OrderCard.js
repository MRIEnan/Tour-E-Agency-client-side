import React, { useState, useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';

const OrderCard = (props) => {
    const {spotArr} = props;
    // console.log(spotArr[1].slice(/^d{4}[\/.]\d{1,2}[\/.]\d{1,2}$/))
    const day = (spotArr[1].split('T')[0])
    const [spot,setSpot] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/spots/${spotArr[0]}`)
        .then(res => res.json())
        .then(data => {
            setSpot(data)
            console.log(data)
        })
    },[]);
    return (
        <div className="package-card">
            <div className="package-card-image">
                <img src={spot?.imageLink} alt={spot?.spotName} />
            </div>
            <div>
                <div className="package-card-top">
                    <h4>${spot?.price}/<small>Per Person</small></h4>
                    <h4><small>{day}</small></h4>
                </div>
                <h2 className="package-card-spotName">{spot?.spotName}</h2>
                <p className="package-card-description">{spot?.description}</p>
                <div className="package-card-bottom">
                    <p><small>{spot?.rating}K+Rating</small></p>
                    <NavHashLink to="/manageAllOrders"><div className="btn-regular-container">
                        <h3>Manage</h3>
                        <div className="btn-regular"></div>
                    </div>
                    </NavHashLink>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;