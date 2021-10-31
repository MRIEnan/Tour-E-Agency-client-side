import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './SpotBooking.css';

const SpotDetails = () => {
    const [submitted,setSubmitted] = useState(false)
    const { control, register,reset, handleSubmit, formState: { errors } } = useForm();
    const {user,sId} = useAuth();
    const [tourDate,setTourDate]= useState(null);
    const [tourSpot,setTourSpot] = useState({})
    const [isGet,setIsGet] = useState(false)

    console.log(sId);
    useEffect(()=>{
        fetch(`https://grisly-vampire-60544.herokuapp.com/spots/${sId}`)
        .then(res => res.json())
        .then(data => {
            setTourSpot(data)
            setIsGet(true)
            
        })
    },[isGet]);
    const onSubmit = data => {
        data.spotUid = sId;
        data.tourDay = tourDate;
        fetch('https://grisly-vampire-60544.herokuapp.com/spotBooking',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                setSubmitted(true);
                alert('Booking Successful');
                reset();
            }
        })
    };
    if(!isGet){
        return (
            <div>
                <h1 style={{textAlign: "center"}}>Please wait for a while...</h1>
            </div>
        )
    }

    if(submitted){
        return(
            <div className="spot-booking-submitted-main-container">
                <h1>Please return to <NavHashLink to="/home">Home</NavHashLink></h1>
                <br/>
                <small>See Your registered Tour</small><h3><NavHashLink to="/myOrders">Here</NavHashLink></h3>
            </div>
        )
    }

    return (
        <div id="spot-booking-form" className="spot-booking-main-container">
            <h1>Please</h1><small>complete your booking</small>
            <div style={{margin: 'auto'}} className="manage-card">
            <div className="manage-card-image-container">
                <img src={tourSpot?.imageLink} alt="" />
                <small className="manage-card-tour-day">price: ${tourSpot?.price}</small>
            </div>
            <div className="manage-card-info-container">
                <h4>{tourSpot?.spotName}</h4>
                <NavHashLink to="/allPackages##all-packages-top" className="btn-regular-container">
                        <h3>Packages</h3>
                        <div className="btn-regular"></div>
                    </NavHashLink>
            </div>
        </div>
            <div className="spot-booking-form-container">
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} />
                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    <input placeholder="City" defaultValue="" {...register("city")} />
                    <input placeholder="phone number" defaultValue="" {...register("phone")} />
                    <Controller control={control} render={({field})=>(
                        <DatePicker className="date-react" placeholderText='date' onChange={(date) => {
                            console.log(date);
                            setTourDate(date);
                            field.onChange(date)}} selected={field.value}/>
                    )}
                    />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default SpotDetails;