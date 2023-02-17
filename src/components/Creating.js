import React from "react";

import { NavBar } from './Navbar.js';
import { UploadTab } from "./CreatingSideTabs.js";

export function CreatingUpload() {
  return (
    <body class="creating-body">
        <header>
            <NavBar currentPage="Creating"/>
        </header>
        <main>
            <div className="flexbox-container">
                <UploadTab />
            </div>
        </main>
    </body>
  );
}

export function CreatingBlackout() {

}

export function CreatingFinalizing() {

}

