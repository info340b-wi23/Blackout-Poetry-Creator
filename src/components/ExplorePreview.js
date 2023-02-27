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
                                    <a href="./Creating.js"><button type="button" className="navigation-buttons btn btn-primary">Create</button></a>
                                </div>
                            </div>

                            <div className="tab-item">
                                <div className="back-button">
                                    <a href="./Explore.js"><button type="button" className="navigation-buttons btn btn-primary">Back to Explore Page</button></a>
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
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous">
            </script>
            </main>
            <Footer />
        </body>
    )
}
