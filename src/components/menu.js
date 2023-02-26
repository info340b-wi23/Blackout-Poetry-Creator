import React from 'react';

export function menu() {
    return (
        <menuBar>
                <header>
                    <img src="img/Menu-title.png" alt="homepage logo" className="menu center"/>
                </header>
                <main className="menu">
                    <ul className="options">
                        <li className="container menu"><a className="menu" href="index.js">EXPLORE</a></li>
                        <li className="container menu"><a className="menu" href="creating.js">CREATE</a></li>
                        <li className="container menu"><a className="menu" href="about.js">ABOUT</a></li>
                    </ul>
                </main>
                <footer className="bg-dark text-center text-lg-start">
                <div className="text-center p-3" style="color:white;background-color: rgba(0, 0, 0);">
                    © 2023 Copyright: INFO 340
                </div>
            </footer>
        </menuBar>
    );
}