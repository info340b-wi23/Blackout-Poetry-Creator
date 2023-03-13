import React from "react";

import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

// Private function which will render the poem based on what is in the array
// Use a map to make divs with each poem and then it will add it to the list
function Poem({poem}) {
    let text = poem.textContent;

    if (text.includes("{")) {
        const jsonHTMLElement = JSON.parse(text); // Parse the JSON to be an HTML string
        text = ( // Then extract the necessary values to "reconstruct" the HTML it used to represent
            jsonHTMLElement.props.children.map((word, i) => { // jsonHTMLElement.props.children = array of span elements
                return(<span className={word.props.className} key={i}>{word.props.children}</span>)
            })
        )
    }

    const title = poem.title;
    const sourceAuthor = poem.sourceAuthor;
    const sourceTitle = poem.sourceTitle;
    const subject = poem.subject;

    let author = ""
    if (poem.textType === "poem") {
        author = <li key="author"><b>Author: </b>{poem.author}</li>
    }

    return (
    <div className="col-md-6">
       <div className="explore-card-user-profile"> 
       <Link to="/ExplorePreview">
               <p className="lit">
                   {text}
               </p>
               <ul className="description-card">
                   <li key="title"><b>Title: </b>{title}</li>
                   {author}
                   <li key="source-title"><b>Source Title: </b>{sourceTitle}</li>
                   <li key="source-author"><b>Source Author: </b>{sourceAuthor}</li>
                   <li key="subject"><b>Subject: </b>{subject}</li>
               </ul>
        </Link>
       </div>
    </div>
    );
}

// This function uses the username and links the user account to the webapp by identifying it.
export function UserProfile(props) {
    const username = props.currentUser !== null ? props.currentUser.displayName : "Guest"; // If username is in the URL then it will replace the placeholder

    const handleSignOut = () => {
        signOut(getAuth())
            .catch(err => console.log(err));
    }

    let createdPoems = []; // Users created poems
    let likedPoems = []; // Users liked poems
    for (let poem of props.poemArray) {
        if (poem.author === username) { // Finds the poems the user wrote
            createdPoems.push(<Poem key={poem.key} poem={poem}/>);
        }
        if (props.currentUser && Object.values(poem.likedBy).includes(props.currentUser.uid)) { // Finds the user's liked poems
            likedPoems.push(<Poem key={poem.key} poem={poem}/>);
        }
    }

    return (
        <main>
        <div className="user-profile flexbox-container">
            <div className="user-info">
                <h1>{username}</h1>
                <img src="/img/profile-icon.png" width="100" height="100" className="d-md-inline-block align-top"
                            alt="Your profile icon"/>
                <button className="btn btn-secondary ms-2 sign-out-button" onClick={handleSignOut}><Link to="/explore">Sign Out</Link></button>
            </div>
            <div className="tab-selection">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item user-tab" role="presentation">
                        <button className="nav-link bg-dark active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button"
                            role="tab" aria-controls="home-tab-pane" aria-selected="true">Your Posts</button>
                    </li>
                    <li className="nav-item user-tab" role="presentation">
                        <button className="nav-link bg-dark" id="liked-tab" data-bs-toggle="tab" data-bs-target="#liked-tab-pane" type="button"
                            role="tab" aria-controls="liked-tab-pane" aria-selected="false">Liked</button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                        {createdPoems}                                    
                    </div>
                    <div className="tab-pane fade" id="liked-tab-pane" role="tabpanel" aria-labelledby="liked-tab" tabIndex="0">
                        {likedPoems}
                    </div>
                </div>
            </div>
        </div>
    </main>

    );
}