import React, { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';

import './AddSpotContainer.css';

const AddSpotContainer = () => {
    const [imageLink,setImageLink] = useState('');
    const [price,setPrice] = useState(0);
    const [days,setDays]= useState(0);
    const [night,setNight]= useState(0);
    const [spotName,setSpotName]= useState('');
    const [country,setCountry]=useState('');
    const [description,setDescription] = useState('Very beautiful and charmed place to visit...');
    const [rating,setRating]=useState(4);
    const [added,setAdded] = useState(false)
    
    const handleAddSpot = e =>{
        e.preventDefault();
        const newObj={};
        newObj.imageLink=imageLink;
        newObj.price=price;
        newObj.days=days;
        newObj.night=night;
        newObj.spotName=spotName;
        newObj.country=country;
        newObj.description=description;
        newObj.rating=rating;
        fetch('https://grisly-vampire-60544.herokuapp.com/addSpots',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newObj)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                setAdded(true);
                alert('Successfully added the spot');
            }
        });
    }

    if(added){
        return(
            <div className="spot-booking-submitted-main-container">
                <h1>Please return to <NavHashLink to="/home">Home</NavHashLink></h1>
                <br/>
                <small>See Your registered Tour</small><h3><NavHashLink to="/myOrders">Here</NavHashLink></h3>
            </div>
        )
    }

    return (
        <div className="add-spot-main-container">
            <h2 id="add-spot-top">Add a new Spot</h2>
            <div className="add-spot-form-container">
                <form onSubmit={handleAddSpot}>
                    <input onChange={e=>setSpotName(e.target.value)} type="text" placeholder="Tour spot name" required/>
                    <input onChange={e=>setDescription(e.target.value)} type="Description" placeholder="Description"/>
                    <input onChange={e=>setImageLink(e.target.value)} type="text" placeholder="Spot image url" required/>
                    <input onChange={e=>setCountry(e.target.value)} type="text" placeholder="Country name of spot" required/>
                    <input onChange={e=>setPrice(e.target.value)} type="number" placeholder="Tour Price" required/>
                    <input onChange={e=>setDays(e.target.value)} type="number" placeholder="Days" required/>
                    <input onChange={e=>setNight(e.target.value)} type="number" placeholder="Night" required/>
                    <input onChange={e=>setRating(e.target.value)} type="number" placeholder="Rating within 0-10" min="0" max="10"/>
                    <button type="submit">Add</button>
                </form>

            </div>
        </div>
    );
};

export default AddSpotContainer;