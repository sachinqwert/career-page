import React from 'react';
import ReactDOM from 'react-dom';

const ucLogo = "https://picsum.photos/seed/picsum/536/354";
const heading = " @ 2014-2021 Urbanclap Technologies India private Limited";

export function FooterTitle (props) {
    return (
        <div className="footer-title">
            <img src ={ucLogo} className="logo-image" />
            <b>Urban<br/> Company</b>
        </div>
    )
}

export function FooterLinkSection (props) {
    return (
        <div className="footer-link-section">
            <div className="footer-link-section-list" >
                <ul>
                    <li><b>Company</b></li> 
                    <li>About us</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Anti Discrimination Policy</li>
                </ul>
            </div>
            <div className="footer-link-section-list" >
                <ul>
                    <li><b>For Professionals</b></li> 
                    <li>Join as Professional</li>
                    <li>Community</li>
                    <li>Professional Support</li>
                </ul>
            </div>
            <div className="footer-link-section-list" >
                <ul>
                    <li><b>For you</b></li> 
                    <li>Near me</li>
                    <li>Reviews</li>
                    <li>Gift Card</li>
                    <li>Mobile Apps</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditons</li>
                </ul>
            </div>
        </div>
    );
}

export function FooterInformation (props) {
    return (
        <>
        <div className="footer-information">
            <div className="footer-information-list">
                <p>{heading}</p>
            </div>
            <div className="footer-information-list">
                <p>Logo</p>
                <p>Logo</p>
                <p>Logo</p>
                <p>Logo</p>
                <p>Logo</p>
                <p>Logo</p>
                <p>Logo</p>
            </div>
        </div>
        </>
    );
}

export function FooterWrapper (props) {
    return (
        <div className="footer-wrapper-class">
            <FooterTitle/>
            <FooterLinkSection/>
            <hr/>
            <FooterInformation/>
        </div>
    );
}