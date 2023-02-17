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
            <div className="d-md-none d-block mx-4.5">
                <a href="creating-blackout-page.html" aria-label="next button"><button type="button" className="px-5 navigation-buttons submit btn btn-primary">Next</button></a>
            </div>
        </div> 
    );
}

export function BlackoutTab() {
    return (
        <div className="creation-tab-splitter">
            <div className="tab-item">
                <h1 className="d-inline-block d-md-none">Tap on the words you want to black out.</h1>
                <h1 className="d-none d-md-inline-block">Click on the words you want to black out.</h1>
            </div>
            <div className="tab-item">
                <p className="d-inline-block d-lg-none">Tap on words to undo blackouts</p>
                <p className="d-none d-md-inline-block">Made a mistake? Click on words to undo!</p>
                <button type="button" className="clear-button btn btn-primary">Clear All Blackouts</button>
            </div>
            <div className="tab-item">
                <p className="d-none d-lg-block">Not sure how to blackout poetry?</p>
                <a href="about.html">Check out our helpful guides!</a>
            </div>
            <div className="tab-item d-none d-lg-inline-block">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <a href="creating-upload-page.html"><button type="button" className="navigation-buttons btn btn-primary">Back</button></a>
                        </div>
                        <div className="col">
                            <a href="creating-final-page.html"><button type="button" className="navigation-buttons submit btn btn-primary">Next</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flexbox-container d-block d-md-none">
                <a href="creating-upload-page.html" aria-label="back button"><button type="button" className="px-5 navigation-buttons btn btn-primary">Back</button></a>
                <a href="creating-final-page.html" aria-label="next button"><button type="button" className="px-5 navigation-buttons submit btn btn-primary">Next</button></a>
            </div>
        </div>
    );
}

export function FinalizingTab() {
    return (
        <div className="creation-tab-splitter">
            <div className="tab-item">
                <h1>Add tags to help others find it!</h1>
            </div>
            <div className="tab-item">
                <div className="container"> 
                    <div className="row">
                        <div className="col-3">
                            <p>Subject</p>
                        </div>
                        <div className="col">
                            <select className="form-select" aria-label="Genre selection">
                                <option selected>Culture</option>
                                <option value="1">Ethnics</option>
                                <option value="2">Politics</option>
                                <option value="3">Drama</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-item">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <p>Title</p>
                        </div>
                        <div className="col">
                            <input className="form-control form-input-margin" type="text" placeholder="My poem" aria-label="Title of your poem"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-item">
                <div className="container">
                    <p className ="p-source-adjustment"><b>Source</b></p>
                    <div className="row">
                        <div className="col-5">
                            <p>Piece Title</p>
                        </div>
                        <div className="col">
                            <input className="form-control form-input-margin" type="text" placeholder="What A. Philip Randolph Knew About Jobs and Freedom" aria-label="Title of the source text you used"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5">
                            <p>Author</p>
                        </div>
                        <div className="col">
                            <input className="form-control form-input-margin" type="text" placeholder="Jamelle Bouie" aria-label="Author of the source text you used"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-item">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <p>Description</p>
                        </div>
                    </div>
                    <textarea className="form-control" id="description" placeholder="What is your poem about?"></textarea>
                </div>
            </div>
            <div className="tab-item d-none d-md-inline-block">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <a href="creating-blackout-page.html"><button type="button" className="navigation-buttons btn btn-primary">Back</button></a>
                        </div>          
                        <div className="col">
                            <a href="index.html"><button type="button" className="navigation-buttons submit btn btn-primary">Submit</button></a>
                        </div>
                    </div>
                </div>
                <div className="flexbox-container d-block d-md-none">
                    <a href="creating-blackout-page.html" aria-label="back button"><button type="button" className="px-5 navigation-buttons btn btn-primary">Back</button></a>
                    <a href="index.html" aria-label="submit button"><button type="button" className="px-5 navigation-buttons submit btn btn-primary">Submit</button></a>
                </div>
            </div>
        </div>
    );
}