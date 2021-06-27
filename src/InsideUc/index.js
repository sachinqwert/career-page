import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/functions';
import { separateObjects } from '../assets/functions';


export const Heading = "Inside UC";

// This function actually makes the card
export function GetCards(props) {
    const item = props.name;
    const CardBackgroundImage = {
        backgroundImage: `url(${item.imgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };


    return (
        <div className="card-container">
            <div className="card-image" style={CardBackgroundImage}>

            </div>
            <div className="card-details">
                <h2>{props.name.heading}</h2>
                <p>{props.name.subHeading}</p>
                <a href={item.urlLink} target="_blank"> 
                    <button>{props.name.urlDescription}</button>
                </a>
            </div>
        </div>
    )
}

// This function returns a row of cards. we are iterating our cards.
export function PopulateCards(props) {
    const arr = props.name;
    return (
        <div className="inside-uc-card-container">
            {
                arr.map((item) => 
                    <GetCards name={item} />
                )
            }
        </div>
    );
}

// This is the main function that we are calling to make Inside UC portion on web page
export function InsideUcWrapper (props) {
    const obj = separateObjects(props.name);
    return (
        <div className="inside-uc-wrapper">
            <h1 className="inside-uc-heading">Inside UC</h1>
            <h1>{obj.Engineering[0].category}</h1>    
            <PopulateCards name={obj.Engineering}/>    

            <h1>{obj.Design[0].category}</h1>    
            <PopulateCards name={obj.Design}/>     

            <h1>{obj.Culture[0].category}</h1>    
            <PopulateCards name={obj.Design}/>        
        </div>
    )
}