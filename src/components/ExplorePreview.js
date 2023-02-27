import React from 'react';
import {textForExplorePreview} from './ExploreOther.js';

import { Link } from 'react-router-dom';

// import the text item that you want to display
const previewText = textForExplorePreview;

// Blank for now, but for final draft will have the poem's text in it when you click on a poem
export function ExplorePreview(){
    return(
        <div className="explore-body">
            <main className="explore2-main">
                <div className="preview-container">
                    <section className="preview-tab">
                        <div className="preview-tab-splitter">
                            <div className="tab-item">
                                <p>Description</p>
                                <ul className="description">
                                    <li>{previewText.title}</li>
                                    <li>{previewText.sourceTitle}</li>
                                    <li>{previewText.sourceAuthor}</li>
                                    <li>{previewText.description}</li>
                                    <li>{previewText.subject}</li>
                                </ul>
                            </div>
                            
                            <div className="tab-item">
                                <div className="create-button">
                                    {/* is this the right creat page? */}
                                    <Link to="/creating"><button type="button" className="navigation-buttons btn btn-primary">Create</button></Link>
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
        </div>
    )
}