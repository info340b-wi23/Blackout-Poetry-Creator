import React from 'react';

export function NavBar() {
    return (
        <nav className="dark-bg navbar fixed-top navbar-expand-lg" role="navigation">
            <div className="container-fluid">
                <a className="navbar brand" href="menu.html">
                    <img src="img/logo.svg" className="d-inline-block align-top" alt="Logo which links to homepage"/>
                </a>
                <span className="d-inline-block d-md-none mr-10">
                    <img src="img/profile-icon.png" width="50" height="50" className="d-md-inline-block align-top"
                    alt="Logo which links to homepage"/>
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active px-5" aria-current="page" href="creating-upload-page.html">Create</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-5" href="index.html">Explore</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-5" href="about.html">About</a>
                        </li>
                    </ul>
                    <span className="px-lg-5 d-none d-md-block">
                        <img src="img/profile-icon.png" width="50" height="50" className="d-md-inline-block align-top" alt="Logo which links to homepage"/>
                    </span>
                </div>
            </div>
        </nav>
    );
}