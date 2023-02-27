import React from 'react';

export function MenuBar() {
    return (
    <div className="menu">
        <header>
            <img src="/img/Menu-title.png" alt="homepage logo" className="menu center"/>
        </header>
        <main className="menu">
            <ul className="options">
                <li className="container menu"><a className="menu" href="/index">EXPLORE</a></li>
                <li className="container menu"><a className="menu" href="/creating">CREATE</a></li>
                <li className="container menu"><a className="menu" href="/about">ABOUT</a></li>
            </ul>
        </main>
    </div>
    );
}