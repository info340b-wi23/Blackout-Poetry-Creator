import React from "react";

import { Link } from "react-router-dom";

//This function provides a discription about the web application and block out poyetry in the ABOUT page on the webapp.
export function AboutArticle() {
    return(
        <main className="about">
            <article>
                <header className="text-center">
                    <img src="/img/glen-carrie-oHoBIbDj7lo-unsplash.jpg" alt="A bunch of words" width="300px" aria-label="A bunch of words"></img>
                    <figcaption>
                        Photo by <cite><a className="text-dark" href="https://unsplash.com/photos/oHoBIbDj7lo">Glen Carrie</a></cite>
                    </figcaption>
                    <h1 className="mt-2">What is Blackout Poetry?</h1>
                </header>
            <div className="container about pt-2">
                <p className="fs-5">Dating back to the 18th century, blackout poetry, also known as redacted poetry, is a unique form of poetry where one takes any piece of text from any source, such as a newspaper article or old book, and "blacks out" some words while leaving untouched only the ones they desire to keep in their poem. The result is often a visually pleasing piece of contrastive art while simultaneously rendering an interesting poem using words already in the given text, both limiting the poet to what they can write but also allowing them to combine words in a way that has never been done before.</p>
                <h2>Why Make a Blackout Poetry Website?</h2>
                <p className="fs-5">Traditional blackout poetry requires pen and paper. A digitalized version of blackout poetry means that you don't have to destroy books or waste ink to get creative. By using this platform, you will not only be able to create blackout poems just like you would with physical materials, but you also have the ability to create poems from almost any piece of text, meaning you can create a poem using your favorite book without sacrificing the physical copy. To learn more about how to use our platform, click <Link className="text-primary" to="/about/instructions">here</Link>.</p>
            </div>
            </article>
        </main>
    )
}