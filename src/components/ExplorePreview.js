import React from 'react';
import {textForExplorePreview} from 'ExploreOther.js';

// import the text item that you want to display
const previewText = textForExplorePreview;

export function ExplorePreview(){
    return(
        <div className="explore-body">
            <main class="explore2-main">
                <div class="preview-container">
                    <section class="preview-tab">
                        <div class="preview-tab-splitter">
                            <div class="tab-item">
                                <p>Description</p>
                                <ul class="description">
                                    <li>{previewText.title}</li>
                                    <li>{previewText.sourceTitle}</li>
                                    <li>{previewText.sourceAuthor}</li>
                                    <li>{previewText.description}</li>
                                    <li>{previewText.subject}</li>
                                </ul>
                            </div>
                            
                            <div class="tab-item">
                                <div class="create-button">
                                    {/* is this the right creat page? */}
                                    <a href="/creating"><button type="button" class="navigation-buttons btn btn-primary">Create</button></a>
                                </div>
                            </div>

                            <div class="tab-item">
                                <div class="back-button">
                                    <a href="/index"><button type="button" class="navigation-buttons btn btn-primary">Back to Explore Page</button></a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="explore-preview">
                        <div class="preview-text-container">
                            <div class="preview-header">
                                <h1>Preview</h1>
                            </div>
                            <div class="view-content">
                                <div class="preview-text">
                                    <div class="preview-text-words">
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
