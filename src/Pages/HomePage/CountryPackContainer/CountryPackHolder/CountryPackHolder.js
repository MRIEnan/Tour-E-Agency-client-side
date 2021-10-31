import React from 'react';
import SectionHeader from '../../../Shared/SectionHeader/SectionHeader';
import CountryPack from '../CountryPack/CountryPack';

const CountryPackHolder = () => {
    const title = "Choose Your Destination";
    const details = "Select Best Place For Your Travel";

    return (
        <div>
            <SectionHeader title={title} details={details}></SectionHeader>
            <CountryPack name="Spain"></CountryPack>
            <CountryPack name="Italy"></CountryPack>
            <CountryPack name="France"></CountryPack>
            
        </div>
    );
};

export default CountryPackHolder;