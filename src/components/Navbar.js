import React from "react";

import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

// Renders the navbar with the correct item highlighted based on what the current page is
export function NavItems(currPageID) {
    const creatingNavItem = currPageID.currPageID === "creating" ? 
    <Link className="nav-link active px-5" to="/creating/upload">Create</Link>
    : <Link className="nav-link px-5" to="/creating/upload">Create</Link>

    const exploreNavItem = currPageID.currPageID === "index" ?
    <Link className="nav-link active px-5" to="/index">Explore</Link>
    : <Link className="nav-link px-5" to="/index">Explore</Link>

    const aboutNavItem = currPageID.currPageID === "about" ?
    <Link className="nav-link active px-5" to="/about">About</Link>
    : <Link className="nav-link px-5" to="/about">About</Link>

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
                <Link className="navbar brand" to="/menu">
                    <img src="/img/logo.svg" className="d-inline-block align-top" alt="Logo which links to homepage"/>
                </Link>
                <span className="d-inline-block d-md-none mr-10">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img src="/img/profile-icon.png" width="50" height="50" className="d-md-inline-block align-top" alt="Logo which links to homepage"/>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarSupportedContent">
                        <ul>
                            <li><Link to="/userprofile" >Your Profile</Link></li>
                            <li><Link to="/menu">Log out</Link></li>
                        </ul>
                    </div>
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
                        <Link to="/userprofile" aria-label="profile icon that links to user's profile"><img src="/img/profile-icon.png" width="50" height="50" className="d-md-inline-block align-top"
                        alt="Logo which links to homepage"/></Link>
                    </span>
                </div>
            </div>
        </nav>
    );
}