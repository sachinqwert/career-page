import React from 'react';
import ReactDOM from 'react-dom';


// This is function to create Perk Card
export function PerkCard (props) {
    // This is incoming perk item
    const perkItem = props.perkItem;
    // This is used to render background image
    const PerkImage = {
        backgroundImage: `url(${perkItem.imgUrl})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
        };

    // returning the element
    return (
        <div className="perk-card col-sm-12 col-md-12 col-lg-6 row">
            <div className="perk-card-image col-2" style={PerkImage} >
                {/* This is the image of perk-card */}
            </div>
            <div className="perk-card-information col-9">
                {/* This list down the perk */}
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
            <div className="container">
                {/* This is perk heading */}
                <div className="row">  
                        <h1>Perks</h1>
                        <p>
                            {PerkObject.perkDescription}
                        </p>
                </div>

                {/* This lists down all the perks */}
                <div className="perk-card-container row">
                    {
                        PerkObject.perksList.map((item) => 
                            <PerkCard perkItem={item} />
                        )
                    }
                </div>
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
