import React from 'react';
import './SectionHeader.css';

const SectionHeader = (props) => {
    const {title,details} = props;
    return (
        <div className="section-header-container">
            <h3>{title}</h3>
            <h2>{details}</h2>
        </div>
    );
};

export default SectionHeader;