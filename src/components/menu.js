import React from 'react';
import { Link } from 'react-router-dom';

// This function proves the main gateway of the home page that is an consolidated menu of the navigation links.
export function MenuBar() {
    return (
    <div className="menu">
        <header>
            <img src="/img/Menu-title.png" alt="homepage logo" className="menu center"/>
        </header>
        <main className="menu">
            <ul className="options">
                <li className="container menu"><Link className="menu" to="/index">EXPLORE</Link></li>
                <li className="container menu"><Link className="menu" to="/creating">CREATE</Link></li>
                <li className="container menu"><Link className="menu" to="/about">ABOUT</Link></li>
            </ul>
        </main>
    </div>
    );
}