import React from "react";

import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";


// Renders the navbar with the correct item highlighted based on what the current page is
export function NavItems(props) {
    const creatingNavItem = props.currPageID === "creating" ? 
    <Link className="nav-link active px-5" to={props.isLoggedIn("/creating/upload")}>Create</Link>
    : <Link className="nav-link px-5" to={props.isLoggedIn("/creating/upload")}>Create</Link>

    const exploreNavItem = props.currPageID === "explore" || props.currPageID === undefined ?
    <Link className={"nav-link active px-5"} to="/explore">Explore</Link>
    : <Link className="nav-link px-5" to="/explore">Explore</Link>

    const aboutNavItem = props.currPageID === "about" ?
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

export function NavBar(props) {

    function isLoggedIn(destination) {
	    if(props.currentUser === null) {
            return "/signin";
        } else {
            return destination;
        }
    }

    const currPageID = useParams().currPage;
    // Menu page does not have a navbar
    if (currPageID === "menu") {
        return;
    }

    const username = props.currentUser !== null ? <p className="username">{props.currentUser.displayName}</p> : "";

    return (
        <nav className="dark-bg navbar fixed-top navbar-expand-lg" role="navigation">
            <div className="container-fluid">
                <Link className="navbar brand" to="/menu">
                    <img src="/img/logo.svg" className="d-inline-block align-top" alt="Logo which links to homepage"/>
                </Link>
                <span className="d-inline-block d-md-none mr-10">
                    <Link to={isLoggedIn("/userprofile")} aria-label="profile icon that links to user's profile"><img src="/img/profile-icon.png" width="50" height="50" className="d-md-inline-block mx-4"
                    alt="Logo which links to homepage"/>
                    </Link>
                    <span className="mx-3">
                        {username}
                    </span>
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <NavItems currPageID={currPageID} isLoggedIn={isLoggedIn}/>
                    </ul>
                    <div className="d-none d-md-inline">
                        {username}
                    </div>
                    <span className="px-lg-5 d-none d-md-block"> 
                        <Link to={isLoggedIn("/userprofile") } aria-label="profile icon that links to user's profile">
                            <div>
                                <img src="/img/profile-icon.png" width="50" height="50" className="d-md-inline-block" alt="Logo which links to homepage"/>
                            </div>
                        </Link>
                    </span>
                </div>
            </div>
        </nav>
    );
}