import React from 'react';

import { Link, Navigate } from 'react-router-dom';

import { getDatabase, ref, push as firebasePush, remove} from 'firebase/database'

// Blank for now, but for final draft will have the poem's text in it when you click on a poem
export function ExplorePreview(props){
    let previewText = props.previewPoem;
    
    if (Object.keys(previewText).length === 0) { // In the case the user refreshes the page here, redirect to the explore page to avoid errors
        return <Navigate to ="/explore"/>;
    }

    // If the text is a poem, we need to render the blackout elements. There isn't just text in these!
    if (previewText.textContent.includes("{")) {
        const jsonHTMLElement = JSON.parse(previewText.textContent); // Parse the JSON to be an HTML string
        previewText.textContent = ( // Then extract the necessary values to "reconstruct" the HTML it used to represent
            jsonHTMLElement.props.children.map((word, i) => { // jsonHTMLElement.props.children = array of span elements
                return(<span className={word.props.className} key={i}>{word.props.children}</span>)
            })
        )
    }

    // We want to use the preview poem, so set it as our focused poem in the create page 
    function handleFocusedPoem() {
        props.handleFocusedPoem(previewText);
    }

    // Make sure user is logged in if they want to like or create the previewed poem
    function isLoggedIn(destination) {
	    if(props.currentUser === null) {
            return "/signin";
        } else {
            return destination;
        }
    }

    function adjustLiked() { // Like button
        const db = getDatabase();
        if (props.currentUser !== null) {
            let userId = props.currentUser.uid;
            if (previewText.likedBy && Object.values(previewText.likedBy).includes(userId)) { // Unliking a post since the user is in the likedBy array
                for (let key in previewText.likedBy) { // For each person (who is uniquely identified by key) in te likedBy array
                    if (previewText.likedBy[key] === userId) { // If their userId matches the person who is liking it 
                        const likedByRef = ref(db, `poems/${previewText.key}/likedBy/${key}`);
                        remove(likedByRef) // Remove this person from the likedBy array
                            .catch((err) => console.log(err));
                    }
                }
            } else { // The person is not in the likedBy array
                previewText.likedBy = previewText.likedBy += ` ${userId}`; // Add this user
                const poemsRef = ref(db, `poems/${previewText.key}/likedBy`);
                firebasePush(poemsRef, props.currentUser.uid) // Push it to the database
                    .catch(err => console.log(err));
            }
        }
    }

    return(
            <main className="explore2-main">
                <div className="preview-container">
                    <section className="preview-tab">
                        <div className="preview-tab-splitter">
                            <div className="tab-item">
                                <p>Description</p>
                                <ul className="description">
                                    <li><b>Title: </b>{previewText.title}</li>
                                    <li><b>Source Title: </b>{previewText.sourceTitle}</li>
                                    <li><b>Source Author: </b>{previewText.sourceAuthor}</li>
                                    <li><b>Description: </b>{previewText.description}</li>
                                    <li><b>Subject: </b>{previewText.subject}</li>
                                </ul>
                            </div>
                            
                            <div className="tab-item">
                                <div className="like-button">
                                    {/* Note that if the user is in the likedBy array, the button will look different. window.scrollTo scrolls to the top */}
                                    {/*https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo*/}
                                    <Link to={isLoggedIn("/explore")} onClick={() => {window.scrollTo(0, 0)}}>
                                        {props.currentUser && previewText.likedBy &&  Object.values(previewText.likedBy).includes(props.currentUser.uid) ? (
                                                <button type="button" className="navigation-buttons btn btn-primary liked" onClick={adjustLiked}>Liked &#10084;</button>
                                            ) : (
                                                <button type="button" className="navigation-buttons btn btn-primary" onClick={adjustLiked}>Like &#10084;</button>
                                        )}
                                    </Link>
                                </div>
                                <div>
                                    <Link to={isLoggedIn("/creating")}><button type="button" className="navigation-buttons btn btn-primary" onClick={handleFocusedPoem}>Create</button></Link>
                                </div>
                            </div>

                            <div className="tab-item">
                                <div className="back-button">
                                    <Link to="/explore"><button type="button" className="navigation-buttons btn btn-primary">Back to Explore Page</button></Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="explore-preview">
                        <div className="preview-text-container">
                            <div className="preview-header">
                                <h1>Preview</h1>
                            </div>
                            <div className="view-content">
                                <div className="preview-text">
                                    <div className="preview-text-words">
                                        {previewText.textContent}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
    )
}