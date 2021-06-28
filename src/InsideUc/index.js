import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/functions';
import { separateObjects } from '../assets/functions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'



export const Heading = "Inside UC";

// This function actually makes the card
export function GetCards(props) {
    // get the item all the item is stored in the varieble props.name
    const item = props.name;

    // this is used to change background image. it's only use. see the line  
    //  <div className="card-image" style={CardBackgroundImage}>
    const CardBackgroundImage = {
        backgroundImage: `url(${item.imgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };

    // returning the card
    return (
        
        // outer enclosure for bootstarp
        <div className="col-sm-12 col-md-6 col-lg-4">
                    {/* inside this is actually the card */}
                    <div className="card-container ">

                        <div className="card-image" style={CardBackgroundImage}>
                            {/* This is the image */}
                        </div>

                        {/* This contains details below image inside card */}
                        <div className="card-details">
                            <h2>{props.name.heading}</h2>
                            <p>{props.name.subHeading}</p>
                            <a href={item.urlLink} target="_blank"> 
                                <button className="inside-uc-card-button">{props.name.urlDescription}</button>
                            </a>
                        </div>

                    </div>
        </div>
    )
}

// This function returns a row of cards. we are iterating our cards.
export function PopulateCards(props) {
    const arr = props.item;
    const itemName = props.name;
    return (
        <div className="inside-uc-card-container ">
            <h2>{itemName}</h2>
            <div className="row">
                {
                    arr.map((item) => 
                        <GetCards name={item} />
                    )
                }
            </div>
        </div>
    );
}

// This is the main function that we are calling to make Inside UC portion on web page
export function InsideUcWrapper (props) {
    const obj = separateObjects(props.name);
    return (

        <div className="container inside-uc-wrapper ">
            
                <h1 className="inside-uc-heading">Inside UC</h1>
                <PopulateCards item={obj.Engineering} name="Engineering" />  
                <PopulateCards item={obj.Design} name="Design"/>
                <PopulateCards item={obj.Culture} name="Culture"/>

        </div>
    )
}