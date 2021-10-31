import React, { useState, useEffect } from 'react';
import './PackageContainer.css';
import PackageCard from '../../Shared/PackageCard/PackageCard';
import SectionHeader from '../../Shared/SectionHeader/SectionHeader';

const PackageContainer = () => {
    const title = "Choose Your Package";
    const details = "Select Your Best Package For Your Travel"

    const [ packages,setPackages ] = useState([]);

    useEffect(()=>{
        fetch('https://grisly-vampire-60544.herokuapp.com/spots')
        .then(res => res.json())
        .then(data => setPackages(data));
    },[packages]);

    return (
        <div  id="tour-package">
            <SectionHeader title={title} details={details}></SectionHeader>
            <div className="package-card-main-container">
            {
                packages?.map(pack => <PackageCard pack={pack} key={pack._id}></PackageCard>)
            }
            </div>
            
        </div>
    );
};

export default PackageContainer;