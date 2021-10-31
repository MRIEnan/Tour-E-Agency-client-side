import React, { useState, useEffect} from 'react';
import './CountryPack.css';
import PackageCard from '../../../Shared/PackageCard/PackageCard';

const CountryPack = (props) => {
    const {name} = props;

    const [spotCountry,setSpotCountry] = useState([]);

    useEffect(()=>{
        fetch(`https://grisly-vampire-60544.herokuapp.com/spotss?country=${name}`)
        .then(res => res.json())
        .then(data => setSpotCountry(data));
    },[]);

    return (
        <div>
            <h1 className="country-pack-title">{name}</h1>
            <div className="package-card-main-container">
                {
                    spotCountry.map(countryPack => <PackageCard key={countryPack._id} pack={countryPack}></PackageCard>)
                }
            </div>
        </div>
    );
};

export default CountryPack;