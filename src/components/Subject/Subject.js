import React from 'react';

const Subject = ({subject}) => {
    const {logo, name, total}=subject;
    return (
        <div>
            <img src={logo}></img> 
        </div>
    );
};

export default Subject;