import React from 'react';
import ReactDOM from 'react-dom';

// This function is for Job Opening Card
export function JobOpeningCard (props) {
    return (
        <div className="job-opening-card">
            <div className="job-opening-card-details">
                <b>Software Development Engineer 111 Data</b>
            </div>
            <div className="job-opening-card-details">
                Engineering
            </div>
            <div className="job-opening-card-details">
                Gurgoan/Bengaluru &nbsp; &nbsp;
                <b>Icon</b>
            </div>
        </div>
    );

}
export function JobOpeningCardContainer (props){
    return (
        <>
        <div className="job-opening-card-container" >
            <h1 className="open-position-heading">Open Positions</h1>
            <h1 className="open-position-sub-heading">Recent Openings</h1>
            <JobOpeningCard/>
            <JobOpeningCard/>
            <JobOpeningCard/>
            <JobOpeningCard/>
            <JobOpeningCard/>
        </div>
        </>
    );
}



export function DepartmentCard (props) {
    return (
        <div className="department-card">

        </div>
    );
}

export function DepartmentCardContainer (props) {
    return (
        <>
            <h1 className="department-card-heading">Departments</h1>
            <div className="department-card-container">
                <DepartmentCard/>
                <DepartmentCard/>
                <DepartmentCard/>
                <DepartmentCard/>
                <DepartmentCard/>
                <DepartmentCard/>
            </div>
        </>
    );
}

export function OpenPositionWrapper (props) {
    return (
        <>
        <div className="open-position-wrapper">
            <JobOpeningCardContainer/>
            <DepartmentCardContainer/>
        </div>
        </>
    );
}

