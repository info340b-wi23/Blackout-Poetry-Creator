import React from "react";


export function UploadTab() {
    return(
        <div className="creation-tab-splitter">
            <div className="tab-item">
                <h1>Choose an uploading method:</h1>
            </div>
            <div className="tab-item d-block">
                <p className="d-inline d-md-none">a. Text Entry</p>
                <p className="d-none d-md-inline-block">a. Enter Custom Text</p>
                <div className="form-floating">
                    <textarea className="form-control" id="floatingTextarea2"></textarea>
                    <label for="floatingTextarea2" className="d-none d-md-inline">(Max 1,330 characters)</label>
                </div>
            </div>
            <div className="tab-item">
                <p>b. Browse the community</p>
                <a href="index.html"><button type="button" className="btn d-inline mx-5 mx-md-0 d-md-inline-block btn-primary">Browse</button></a>
            </div>
            <div className="tab-item d-none d-md-block">
                <a href="creating-blackout-page.html"><button type="button" className="navigation-buttons submit btn btn-primary">Next</button></a>
            </div>
        </div> 
    );
}

export function BlackoutTab() {

}

export function FinalizingTab() {
    
}