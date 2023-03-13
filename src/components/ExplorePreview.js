import React from 'react';

import { Link } from 'react-router-dom';

// Blank for now, but for final draft will have the poem's text in it when you click on a poem
export function ExplorePreview(props){
    let previewText = props.previewPoem;

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
                                    <Link to="/userprofile"><button type="button" className="navigation-buttons btn btn-primary">Like &#10084;</button></Link>
                                </div>
                                <div>
                                    <Link to="/creating"><button type="button" className="navigation-buttons btn btn-primary" onClick={handleFocusedPoem}>Create</button></Link>
                                </div>
                            </div>

                            <div className="tab-item">
                                <div className="back-button">
                                    <Link to="/index"><button type="button" className="navigation-buttons btn btn-primary">Back to Explore Page</button></Link>
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