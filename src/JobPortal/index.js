import React from 'react';
import ReactDOM from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export function GetButton (props) {
    return (
        <>
            <div className="container-lg">
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        Software Engineering
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                        Software Engineering
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                        Software Engineering
                    </div>

                </div>
            </div>
            <div class="container-fluid">
  <h1>Hello World!</h1>
  <div class="row">
    <div class="col-sm-4" style={{backgroundColor: "pink"}}>
      <p>Lorem ipsum...</p>
    </div>
    <div class="col-sm-8" style={{backgroundColor: "pink"}}>
      <p>Sed ut perspiciatis...</p>
    </div>
  </div>
</div>
            <div className="container-lg my-5" >
                    <h2>Hello world</h2>
                    <div className="row">
                        <div className="col-9" style={{backgroundColor:'red'}}>hello world</div>
                        <div className="col-2" style={{backgroundColor:'red'}}>hello world</div>
                        <div className="col-1" style={{backgroundColor:'red'}}>hello world</div>
                    </div>
                </div>
                <div className="container-lg my-5" >
                    <h2>Hello world</h2>
                    <div className="row">
                        <div className="col-sm-12 col-lg-9" style={{backgroundColor:'red'}}>hello world</div>
                        <div className="col-sm-12 col-lg-2" style={{backgroundColor:'red'}}>hello world</div>
                        <div className="col-sm-1  col-lg-1" style={{backgroundColor:'red'}}>hello world</div>
                    </div>
                </div>

        </>
    );
}

export function JobPortalPageCard (props) {
    return (
        <>
            <div className="row job-portal-page-card">
                <div className="col-sm-12 col-lg-4 card-column" >
                    <b>Software Develpment Engineer</b>
                </div>
                <div className="col-sm-6 col-lg-4 card-column" >
                    Engineering
                </div>
                <div className="col-sm-6-col-lg-4 card-column">
                    <small>Gurugoan/Bengaluru</small>
                </div>
            </div>
        </>
    );
}

export function JobPortalPageCardContainer (props) {
    return (
        <div className="container job-portal-card-container" >
            <JobPortalPageCard/>
            <JobPortalPageCard/>
            <JobPortalPageCard/>
            <JobPortalPageCard/>
            <JobPortalPageCard/>
        </div>
    );
}
export function JobPortalInputField (props) {
    return (
        <>
            <div className="container input-field-container" >
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <input type="text" className="form-control" />  
                    </div>
                    <div className="col-sm-6 col-md-2 col-lg-2">
                        <input type="text" className="form-control" />  
                    </div>
                    <div className="col-sm-6 col-md-2 col-lg-2">
                        <input type="text" className="form-control" />
                    </div>
                </div>
            </div>

        </>
    );
}

export function GetJobPortalWrapper (props) {
    return (
        <>
            <JobPortalInputField/>
            <JobPortalPageCardContainer/>
        </>
    );
}