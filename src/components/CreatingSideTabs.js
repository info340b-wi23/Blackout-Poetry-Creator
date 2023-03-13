import { useState, useEffect, React } from "react";

import { Link, useOutletContext } from "react-router-dom";

// Use the uuid library which will assign unique keys
// https://stackoverflow.com/questions/39549424/how-to-create-unique-keys-for-react-elements
import { v4 } from "uuid";

export function UploadTab() {
    const handleTextChange = useOutletContext()[0]; // When textarea text changes, handle it in our parent function
    // Join the word array so that it can be maintained in the textarea tag
    const words = useOutletContext()[1].join(" "); // https://stackoverflow.com/questions/37957862/how-to-join-array-of-strings-in-javascript

    return(
        <div className="creation-tab-splitter">
            <div className="tab-item">
                <h1>Choose an uploading method:</h1>
            </div>
            <div className="tab-item d-block">
                <p className="d-inline d-md-none">a. Text Entry</p>
                <p className="d-none d-md-inline-block">a. Enter Custom Text</p>
                <div className="form-floating">
                    <textarea className="form-control" id="floatingTextarea2" maxLength="1000" value={words} onChange={handleTextChange}></textarea>
                    <label htmlFor="floatingTextarea2" className="d-none d-md-inline">(Max 1,000 characters)</label>
                </div>
            </div>
            <div className="tab-item">
                <p>b. Browse the community</p>
                <Link to="/explore"><button type="button" className="btn d-inline mx-md-0 d-md-inline-block btn-primary">Browse</button></Link>
            </div>
            <div className="tab-item d-none d-md-block">
                <Link to="/creating/blackout"><button type="button" className="navigation-buttons submit btn btn-primary">Next</button></Link>
            </div>
            <div className="tab-item d-md-none d-block mx-4.5">
                <Link to="/creating/blackout"><button type="button" className="px-5 navigation-buttons submit btn btn-primary">Next</button></Link>
            </div>
        </div> 
    );
}

export function BlackoutTab() {
    const changeClickedWords = useOutletContext()[3];
    function handleClick() { // Clear all blackouts by creating a new empty array which indicates no words are blacked out
        changeClickedWords([]);
    }

    return (
        <div className="creation-tab-splitter">
            <div className="tab-item">
                <h1 className="d-inline-block d-md-none">Tap on the words you want to black out.</h1>
                <h1 className="d-none d-md-inline-block">Click on the words you want to black out.</h1>
            </div>
            <div className="tab-item">
                <p className="d-inline-block d-lg-none">Tap on words to undo blackouts</p>
                <p className="d-none d-md-inline-block">Made a mistake? Click on words to undo!</p>
                <button type="button" className="clear-button btn btn-primary" onClick={handleClick}>Clear All Blackouts</button>
            </div>
            <div className="tab-item">
                <p className="d-none d-lg-block">Not sure how to blackout poetry?</p>
                <Link to="/about">Check out our helpful guides!</Link>
            </div>
            <div className="tab-item d-none d-lg-inline-block">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <Link to="/creating/upload"><button type="button" className="navigation-buttons btn btn-primary">Back</button></Link>
                        </div>
                        <div className="col">
                            <Link to="/creating/finalizing"><button type="button" className="navigation-buttons submit btn btn-primary">Next</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flexbox-container d-block d-md-none">
                <Link to="/creating/upload"><button type="button" className="px-5 navigation-buttons btn btn-primary">Back</button></Link>
                <Link to="/creating/finalizing" aria-label="next button"><button type="button" className="px-5 navigation-buttons submit btn btn-primary">Next</button></Link>
            </div>
        </div>
    );
}

export function FinalizingTab(props) {

    // Note, I use sessionStorage which will save these states since technically leaving this subpage leaves the scope of the states 
    // https://stackoverflow.com/questions/28314368/how-to-maintain-state-after-a-page-refresh-in-react-js
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
    const [selectedValue, setSelectedValue] = useState(sessionStorage.getItem("selectedValue") || "Culture");
    const [title, setTitle] = useState(sessionStorage.getItem("title") || "");
    const [sourceTitle, setSourceTitle] = useState(sessionStorage.getItem("sourceTitle") || "");
    const [sourceAuthor, setSourceAuthor] = useState(sessionStorage.getItem("sourceAuthor") || "");
    const [description, setDescription] = useState(sessionStorage.getItem("description") || "");

    // Saves the current state into temporary memory after it re-renders 
    useEffect(() => {
        sessionStorage.setItem("selectedValue", selectedValue);
        sessionStorage.setItem("title", title);
        sessionStorage.setItem("sourceTitle", sourceTitle);
        sessionStorage.setItem("sourceAuthor", sourceAuthor);
        sessionStorage.setItem("description", description);
    })

    const handleSelectionChange = (event) => {
        setSelectedValue(event.target.value);
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSourceTitleChange = (event) => {
        setSourceTitle(event.target.value);
    }

    const handleSourceAuthorChange = (event) => {
        setSourceAuthor(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const changePoemArray = useOutletContext()[2]; // props.handlePoems
    const words = useOutletContext()[1].map((word) => { // Get our words from the parent and add a space (for printing properly)
        return word + " "; 
    });
    const clickedWords = useOutletContext()[4];

    const handleClick = () => { // User hit submit button

        // This just makes the blackout completely opaque while also removing its interactivity features since it is in its final state
        let wordTagWithoutHandler = 
        <p>
            {words.map((word, index) => {
                const isClicked = clickedWords[index] || false;
                return(
                    <span
                        key={word + index}
                        className={isClicked ? "blackout" : ""}>
                    {word}
                    </span>
                );
            })}
        </p>; 

        // Since there is HTML in it, we can convert it to a JSON string with this method
        wordTagWithoutHandler = JSON.stringify(wordTagWithoutHandler);

        // Create a new poem object for our array
        // Use the uuid library which will assign unique keys
        // https://stackoverflow.com/questions/39549424/how-to-create-unique-keys-for-react-elements
        const username = props.currentUser !== null ? props.currentUser.displayName : "A user";
        const poemObj = {
            "key": v4(),
            "subject": selectedValue,
            "title": title,
            "sourceTitle": sourceTitle,
            "sourceAuthor": sourceAuthor,
            "description": description,
            "textContent": wordTagWithoutHandler,
            "rawText": words,
            "textType": "poem",
            "author": username
        };
        changePoemArray(poemObj);
    }

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
                            <select value={selectedValue} onChange={handleSelectionChange} className="form-select">
                                <option value="Culture">Culture</option>
                                <option value="Ethnics">Ethnics</option>
                                <option value="Politics">Politics</option>
                                <option value="Drama">Drama</option>
                                <option value="Other">Other</option>
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
                            <input className="form-control form-input-margin" type="text" placeholder="My Poem" value={title} onChange={handleTitleChange}/>
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
                            <input className="form-control form-input-margin" type="text" value={sourceTitle} onChange={handleSourceTitleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5">
                            <p>Author</p>
                        </div>
                        <div className="col">
                            <input className="form-control form-input-margin" type="text" value={sourceAuthor} onChange={handleSourceAuthorChange}/>
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
                    <textarea className="form-control" placeholder="What is your poem about?" value={description} onChange={handleDescriptionChange}/>
                </div>
            </div>
            <div className="tab-item d-none d-md-inline-block">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <Link to="/creating/blackout"><button type="button" className="navigation-buttons btn btn-primary">Back</button></Link>
                        </div>          
                        <div className="col">
                            <a href="/explore"><button type="button" className="navigation-buttons submit btn btn-primary" onClick={handleClick}>Submit</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flexbox-container d-block d-md-none">
                <Link to="/creating/blackout"><button type="button" className="px-5 navigation-buttons btn btn-primary">Back</button></Link>
                <a href="/explore"><button type="button" onClick={handleClick} className="px-5 navigation-buttons submit btn btn-primary">Submit</button></a>
            </div>
        </div>
    );
}