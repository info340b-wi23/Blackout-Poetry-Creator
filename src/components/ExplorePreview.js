import React from 'react';
import {NavBar} from 'Navbar.js';
import {Footer} from 'Footer';
import {textForExplorePreview} from 'ExploreOther.js';

// import the text item that you want to display
const previewText = textForExplorePreview;

export function ExplorePreview(){
    return(
        <body className="explore-body">
            <header>
                <NavBar />
            </header>

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
                                    <a href="Creating.js"><button type="button" class="navigation-buttons btn btn-primary">Create</button></a>
                                </div>
                            </div>

                            <div class="tab-item">
                                <div class="back-button">
                                    <a href="Explore.js"><button type="button" class="navigation-buttons btn btn-primary">Back to Explore Page</button></a>
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
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous">
            </script>
            </main>
            <Footer />
        </body>
    )
}
