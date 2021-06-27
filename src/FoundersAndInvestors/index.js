import React from 'react';
import ReactDOM from 'react-dom';


// This is founder card
export function FounderCard (props) {
    return (
        <div className="founder-card" >

        </div>
    );
}

// This is founder card container
export function FounderContainer (props) {
    return (
        <>
        <h1>
            Founders
        </h1>
        <div className="founder-card-container">
            <FounderCard/>
            <FounderCard/>
            <FounderCard/>
        </div>
        </>
    );
}

// This is investor card
export function InvestorCard (props) {
    return (
        <div className="investor-card" >

        </div>
    );
}

// This is investor card conatainer
export function InvestorContainer (props) {
    return (
        <>
            <h1>
                Investors
            </h1>
            <div className="investor-card-container">
                <InvestorCard/>
                <InvestorCard/>
                <InvestorCard/>
                <InvestorCard/>
                <InvestorCard/>
                <InvestorCard/>
                <InvestorCard/>
                <InvestorCard/>
                <InvestorCard/>
                <InvestorCard/>
                <InvestorCard/>
            </div>
        </>
    );
}

// This is main wrapper function
export function FounderAndInvestorWrapper (props) {
    return (
        <div className="founder-and-investor-wrapper">
            <FounderContainer/>
            <InvestorContainer/>
        </div>
    );
}