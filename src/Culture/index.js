import React from 'react';
import ReactDOM from 'react-dom';

// This function creates culture cards
export function CultureCard (props) {
    const name = props.name;
    return (
        <div className="culture-card">
            <h2 className="culture-name">{name}</h2>
        </div>
    );
}

// This function creates containers for all culture cards
export function CultureCardContainer (props) {
    const cultureList = props.cultureList;
    return (
        <div className="culture-card-container">
            {
                cultureList.map((item) => 
                    <CultureCard name={item.name} />
                )
            }            
        </div>
    );
}

// This is main wrapper function and will return culture section on web page
export function CultureWrapper (props) {
    const Culture = props.name;
    return (
        <div className="culture-wrapper" >
            <div className="culture-heading">
                <h1>Culture</h1>
                <p className="culture-text">
                    {Culture.cultureDescription}
                </p>
            </div>
            <CultureCardContainer cultureList = {Culture.cultureList} />
        </div>
    )
}