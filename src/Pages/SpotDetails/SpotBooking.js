import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import PackageCard from '../Shared/PackageCard/PackageCard';
import './SpotBooking.css';

const SpotDetails = () => {
    const [submitted,setSubmitted] = useState(false)
    const { control, register,reset, handleSubmit, formState: { errors } } = useForm();
    const {user,sId} = useAuth();
    const [tourDate,setTourDate]= useState(null);
    console.log(sId);
    const onSubmit = data => {
        data.spotUid = sId;
        data.tourDay = tourDate;
        console.log(data)
        fetch('http://localhost:5000/spotBooking',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            if(result.insertedId){
                setSubmitted(true);
                alert('Booking Successful');
                reset();
            }
        })
    };

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
        <div className="spot-booking-main-container">
            <h1>Please</h1><small>complete your booking</small>
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