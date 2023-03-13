import React from "react";
import { Link } from "react-router-dom";

function LinkCard(props) {

    return(
        <div className="col-md-4 col-lg-3 mx-auto d-flex">
            <div className="card about mb-4">
                <img className="card-image" src={props.img} alt={props.alt} ></img>
                <div className="card-body text">
                    <Link className="about text-dark" to={props.link}>
                        <h1 className="card-title">{props.title}</h1>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export function AboutLandingPage(props) {

    return(
        <main className="about">
            <div className="container about px-5">
                <div className="row">
                    <LinkCard img={'/img/Cartoon-Style.jpg'} title={'What is Blackout Poetry?'} alt={'A newspaper'} link={"what-is-blackout-poetry"} />
                    <LinkCard img={'/img/christin-hume-mfB1B1s4sMc-unsplash.jpg'} title={'How to Make a Blackout Poem'} alt={'Person using a computer'} link={"instructions"} />
                    <LinkCard img={'/img/People-passing.jpg'} title={'Examples'} alt={'Blackout poetry visual'} link={"/explore"} />
                </div>
            </div>
        </main>
    );
}