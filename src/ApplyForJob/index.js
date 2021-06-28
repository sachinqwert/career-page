import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


// This function returns a single list of job requirements. there can be multiple lists
export function JobRequirementList (props) {
    return (
        <div className="job-requirement-list">
            <h3>Responsibilities</h3>
            <ul>
                <li>
                    <p>
                        Build scalable and reliable end to end system capabilities on a base of 10 Million MAU users
                    </p>
                </li>
                <li>
                    <p>
                        Lead the team of upto 10 developers to a vision, be responsible for a solid architecture, performance and quality.
                    </p>
                </li>
                <li>
                    <p>
                        Build with platform first approach
                    </p>
                </li>
                <li>
                    <p>
                        Ensuring high impact from your team, working closely with business and product to ideate and innovate.
                    </p>
                </li>
                <li>
                    <p>
                        Set clear career paths for your team members and help every individual pursue their growth path
                    </p>
                </li>
                <li>
                    <p>
                        Be responsible for hiring and ensure team happiness
                    </p>
                </li>

            </ul>
        </div>
    );
}

// This is container on right side of list. This contains apply job button and additional imformation 
// if present any.
export function SubmitYourApplicationForJob (props) {
    return (
        <>
            <div className="container submit-your-application-for-job">
                <button type="button" class="btn btn-primary btn-lg">Apply For This Position</button>
                <div className="job-requirement-other-details"> 
                    <p>
                        Buttons will appear pressed (with a darker background, darker border, and inset shadow) 
                        when active. There’s no need to add a class to  s as they use a pseudo-class. However,
                        you can still force the same active appearance with .active (and include the 
                        aria-pressed="true" attribute) should you need to replicate the state programmatically.
                    </p>
                </div>

            </div>
        </>
    );
}

// This is wrapper function that contains and combines all components of this page.
export function ApplyForJobWrapper (props) {
    return (
        <div className="container apply-for-job-wrapper">

            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <JobRequirementList/>
                </div>
                <div className="col-sm-12 col-md-1 col-lg-1">

                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <SubmitYourApplicationForJob/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                        <JobRequirementList/>
                </div>                
            </div>

        </div>
    );
}