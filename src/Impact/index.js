import React from 'react';
import ReactDOM from 'react-dom';

// This function create impact headline card
export function ImpactCard (props) {
    return (
        <div className="impact-card" >
            
        </div>
    );
}

// This function creates container for impact headline cards
export function ImpactCardContainer (props) {
    const impactList = props.name;
    return (
        <div className="impact-card-container">
            {
                impactList.map((item)=>
                    <ImpactCard name={item} />
                )
            }
        </div>
    );
}

// This is that main wrapper function
export function ImpactWrapper (props) {
    return (
        <div className="impact-wrapper" >
            <h1>Impact Headline</h1>
            <ImpactCardContainer name={props.name} />
        </div>
    );
}