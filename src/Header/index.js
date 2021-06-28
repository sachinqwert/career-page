import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


export function HeaderTitle (props) {
    return (
        <div className="header-title-container">
            <div className="container">
                <h1>Open Positions</h1>
                <h3>Manager</h3>
            </div>
        </div>
    );
} 