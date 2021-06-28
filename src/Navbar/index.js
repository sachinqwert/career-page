import React from 'react';
import ReactDOM from 'react-dom';
import image from './image.jpg';


const randomImage = "https://picsum.photos/id/237/536/354";


export function GetHeaderBar (props) {
    return (
        <>
            <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
                <div class="container fluid">
                    <a class="nav-item nav-link" href="#">Urban Compoany</a>

                    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse collapse justify-content-end " id="navbar-menu">
                        <div class="navbar-nav ms-auto">
                            <a class="nav-item nav-link" href="#home">About us</a>
                        </div>
                    </div>

                </div>

            </nav>
        </>
    );
} 