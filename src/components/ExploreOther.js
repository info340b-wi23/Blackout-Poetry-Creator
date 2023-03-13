import{React, useState, useEffect} from 'react';

import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

export function ExploreFilterList(props){

    // needed because once the database loads, the poems load in so we have to change it after render
    // https://stackoverflow.com/questions/41446560/react-setstate-not-updating-state
    useEffect(() => {
        setFilteredCardList(props.cardData);
        setIsTemplateActive(false);
        setIsPoemActive(false);
        setIsAllActive(true);
    }, [props.cardData]);

    const [filteredCardList, setFilteredCardList] = useState(props.freshCards); 

    // Handles whether the button is currently "active" highlighted. Very hard-coded approach
    const [isPoemActive, setIsPoemActive] = useState(false);
    const [isTemplateActive, setIsTemplateActive] = useState(false); 
    const [isAllActive, setIsAllActive] = useState(true); // default all blackout poems are showed

    const handleClickPoems = function(){
        let newFilteredCardList = props.cardData.filter((card) => {
            return card.textType === "poem";
        });
        setIsPoemActive(true);
        setIsTemplateActive(false);
        setIsAllActive(false);
        setFilteredCardList(newFilteredCardList);
    }

    const handleClickTemplate = function(){
        let newFilteredCardList = props.cardData.filter((card) => {
            return card.textType === "template";
        });
        setIsTemplateActive(true);
        setIsPoemActive(false);
        setIsAllActive(false);
        setFilteredCardList(newFilteredCardList);
    }
    const handleClickAll = function(){
        let newFilteredCardList = props.cardData;
        setIsTemplateActive(false);
        setIsPoemActive(false);
        setIsAllActive(true);
        setFilteredCardList(newFilteredCardList);
    }

    // CREATE A RESET BUTTON SO THAT WE CAN GET ALL THE POEMS / TEMPLATES BACK (use props.freshCards and set filtered cards to be that)
    // props.handleSearchQuery("") to reset 
    const handleResetButton = function() {
        props.handleSearchQuery("");
        setIsTemplateActive(false);
        setIsPoemActive(false);
        setIsAllActive(true);
        setFilteredCardList(props.freshCards);
    }

    let cardList = filteredCardList.map((textObj) => {
        return <ExploreTextCard textObj={textObj} handlePreviewPoem={props.handlePreviewPoem} key={textObj.key} />
    })

    if (cardList.length === 0) { // If the search query had nothing in it
        cardList = <p className="nothing-text">We've found nothing!</p>
    }
    
    return (
        <div>
        {/* //explore page side */}
            <nav className="filter-sort">
                {/* //filter buttons at the top of the page */}
                <ul>
                    <button type="button" className={"filter-buttons btn btn-primary reset-button"} aria-label="Reset search query" onClick={handleResetButton}>
                        RESET</button>
                    <button type="button" className={isPoemActive ? "active filter-buttons btn btn-primary" : "filter-buttons btn btn-primary"} aria-label="Poems" onClick={handleClickPoems}>
                        Poems</button>
                    <button type="button" className={isTemplateActive ? "active filter-buttons btn btn-primary" : "filter-buttons btn btn-primary"} aria-label="Templates" onClick={handleClickTemplate}>
                        Templates</button>
                    <button type="button" className={isAllActive ? "active filter-buttons btn btn-primary" : "filter-buttons btn btn-primary"} aria-label="Poems and Templates" onClick={handleClickAll}>
                        All</button>

                {/* //Filter button check box */}
                    <div id="filter" className="filter-check filter-buttons" tabIndex="100">
                        <span className="filter-title">Filter</span>
                        <Form>
                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Culture"
                                        name="Culture"
                                        type={type}
                                        id={`inline-${type}-Culture`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Ethnic"
                                        name="Ethnic"
                                        type={type}
                                        id={`inline-${type}-Ethnic`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Politics"
                                        name="Politics"
                                        type={type}
                                        id={`inline-${type}-Politics`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Drama"
                                        name="Drama"
                                        type={type}
                                        id={`inline-${type}-Drama`}
                                    />
                                </div>
                            ))}
                        </Form>
                    </div>
                </ul>
            </nav>
            <div className="explore-container">
                {/* set of cards */}
                {cardList}
            </div>
        </div>
    );
}


function ExploreTextCard(props) {
    // textObj is an object from the array in poems.jason 
    let textObj = props.textObj;
    let text = props.textObj.textContent;

    const handleClick = function() {
        props.handlePreviewPoem(props.textObj);
    }

    // If the textContent resembles a JSON Object (meaning it was submitted as a poem)
    // https://stackoverflow.com/questions/43327766/render-html-from-a-json-string-in-react
    if (textObj.textContent.includes("{")) {
        const jsonHTMLElement = JSON.parse(textObj.textContent); // Parse the JSON to be an HTML string
        text = ( // Then extract the necessary values to "reconstruct" the HTML it used to represent
            jsonHTMLElement.props.children.map((word, i) => { // jsonHTMLElement.props.children = array of span elements
                return(<span className={word.props.className} key={i}>{word.props.children}</span>)
            })
        )
    }

    let author = "";
    if (textObj.textType === "template") {
        author = <em>Blackout Poetry Developers</em>
    } 
    // else if it is a poem, get the user id of who wrote it, but this will be added when creating a poem to a new field

    return(
        <div className="explore-card" > 
            {/* sends you to explore 2 if you click on the card */}
            <Link to="/ExplorePreview" aria-label={"card" + textObj.title} onClick = {handleClick}>
            {/* //card */}
                <p className="lit">
                    {text}
                </p>
                <ul className="description-card">
                    <li className='card-title'><b>Title: </b>{textObj.title}</li>
                    <li><b>Author: </b>{author}</li>
                    <li><b>Source: </b>{textObj.sourceTitle}</li>
                    <li><b>Source Author: </b>{textObj.sourceAuthor}</li>
                    <li><b>Description: </b>{textObj.description}</li>
                    <li><b>Subject: </b>{textObj.subject}</li>
                </ul>
            </Link>
        </div>
    ) 
}

