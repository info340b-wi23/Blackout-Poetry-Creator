import React from "react";
import { AboutCard } from "./AboutInstructionPage.js";
import { AboutArticle } from "./AboutArticle.js";

function LinkCard(props) {

    return(
        <div class="card about mb-4">
            <img class="card-image" src={props.img} alt={props.alt} ></img>
            <div class="card-body text">
                <a class="about text-dark" href="about2.html">
                    <h1 class="card-title">{props.title}</h1>
                </a>
            </div>
        </div>
    );
}

export function AboutLandingPage(props) {

    return(
        <main>
            <div className="container about">
                <div className="row">
                    <div class="col-md-4 col-lg-3 mx-auto">
                        <LinkCard img={'img/Cartoon-Style.jpg'} title={'What is Blackout Poetry?'} alt={'A newspaper'} />
                        <LinkCard img={'img/christin-hume-mfB1B1s4sMc-unsplash.jpg" alt="blackout poetry visual'} title={'How to Make a Blackout Poem'} alt={'Person using a computer'} />
                        <LinkCard img={'img/People-passing.jpg'} title={'Example Poems'} alt={'Blackout poetry visual'} />
                    </div>
                </div>
            </div>
        </main>
    );
}