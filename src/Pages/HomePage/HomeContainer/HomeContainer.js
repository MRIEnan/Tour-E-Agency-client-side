import React from 'react';
import CountryPackHolder from '../CountryPackContainer/CountryPackHolder/CountryPackHolder';
import HomeTopBanner from '../HomeTopBanner/HomeTopBanner';
import PackageContainer from '../PackageContainer/PackageContainer';
import WhyTourEContainer from '../WhyTourE/WhyTourEContainer/WhyTourEContainer';

const HomeContainer = () => {
    return (
        <div>
            <HomeTopBanner></HomeTopBanner>
            <PackageContainer></PackageContainer>
            <CountryPackHolder></CountryPackHolder>
            <WhyTourEContainer></WhyTourEContainer>
        </div>
    );
};

export default HomeContainer;