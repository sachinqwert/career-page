import React from 'react';
import ReactDOM from 'react-dom';


// This is function to create Perk Card
export function PerkCard (props) {
    const perkItem = props.perkItem;
    const PerkImage = {
        backgroundImage: `url(${perkItem.imgUrl})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
        };


    return (
        <div className="perk-card">
            <div className="perk-card-image" style={PerkImage} >

            </div>
            <div className="perk-card-information">
                {perkItem.perkDetail}
            </div>
        </div>        
    );
}

// This is function to create container for many perk cards
export function PerkCardContainer (props) {
    const PerkObject = props.name;
    return (
        <>
            <div>
                <h1>Perks</h1>
                <p>
                    {PerkObject.perkDescription}
                </p>
            </div>
            <div className="perk-card-container">
                {
                    PerkObject.perksList.map((item) => 
                        <PerkCard perkItem={item} />
                    )
                }
            </div>
        </>
    );
}

// This is wrapper and returns the perk section on webpage.
export function PerkWrapper (props) {
    return (
        <div className="perk-wrapper">
            <PerkCardContainer name = {props.name}/>
        </div>
    );
}
