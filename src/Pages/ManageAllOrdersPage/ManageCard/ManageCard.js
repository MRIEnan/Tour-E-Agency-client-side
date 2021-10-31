import React, { useEffect, useState } from 'react';
import  './ManageCard.css';

const ManageCard = (props) =>{
    const{ handleDeleteSpot, mySpot} = props;
    console.log(mySpot)
    // const [run,setRun] = useState(true);
    const[spot,setSpot] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/spots/${mySpot.spotUid}`)
        .then(res => res.json())
        .then(data => {
            setSpot(data)
            
        })
    },[]);


    return(
        <div className="manage-card">
            <div className="manage-card-image-container">
                <img src={spot.imageLink} alt="" />
                <small className="manage-card-tour-day">{mySpot.tourDay.split("T")[0]}</small>
            </div>
            <div className="manage-card-info-container">
                <h4>{spot.spotName}</h4>
                <div onClick={()=>{handleDeleteSpot(mySpot._id)}} className="btn-regular-container">
                        <h3>Delete</h3>
                        <div className="btn-regular"></div>
                    </div>
            </div>
        </div>
    )
}

export default ManageCard;