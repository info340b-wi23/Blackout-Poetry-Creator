import React from "react";

import { useParams } from "react-router-dom";

// Renders the navbar with the correct item highlighted based on what the current page is
export function NavItems(currPageID) {
    const creatingNavItem = currPageID.currPageID === "creating" ? 
    <a className="nav-link active px-5" href="/creating/upload">Create</a>
    : <a className="nav-link px-5" href="/creating/upload">Create</a>

    const exploreNavItem = currPageID.currPageID === "index" ?
    <a className="nav-link active px-5" href="/index">Explore</a>
    : <a className="nav-link px-5" href="/index">Explore</a>

    const aboutNavItem = currPageID.currPageID === "about" ?
    <a className="nav-link active px-5" href="/about">About</a>
    : <a className="nav-link px-5" href="/about">About</a>

    return(
    <>
        <li className="nav-item">
            {creatingNavItem}
        </li>
        <li className="nav-item">
            {exploreNavItem}
        </li>
        <li className="nav-item">
            {aboutNavItem}
        </li>
    </>
    );
}

export function NavBar() {
    const currPageID = useParams().currPage;
    // Menu page does not have a navbar
    if (currPageID === "menu") {
        return;
    }

    return (
        <nav className="dark-bg navbar fixed-top navbar-expand-lg" role="navigation">
            <div className="container-fluid">
                <a className="navbar brand" href="/menu">
                    <img src="/img/logo.svg" className="d-inline-block align-top" alt="Logo which links to homepage"/>
                </a>
                <span className="d-inline-block d-md-none mr-10">
                    <a href="/userprofile" aria-label="profile icon that links to user's profile"><img src="/img/profile-icon.png" width="50" height="50" className="d-md-inline-block align-top"
                    alt="Logo which links to homepage"/></a>
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <NavItems currPageID = {currPageID}/>
                    </ul>
                    <span className="px-lg-5 d-none d-md-block">
                        <a href="/userprofile" aria-label="profile icon that links to user's profile"><img src="/img/profile-icon.png" width="50" height="50" className="d-md-inline-block align-top"
                        alt="Logo which links to homepage"/></a>
                    </span>
                </div>
            </div>
        </nav>
    );
}