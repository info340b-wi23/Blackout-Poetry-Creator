import{React, useState} from 'react';

import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

export function ExploreFilterList(props){
    let cards = props.cardData.filter((card) => {
            return card.textType === "template";
    });

    const [filteredCardList, setFilteredCardList] = useState(cards); 
    
    // Handles whether the button is currently "active" highlighted. Very hard-coded approach
    const [isPoemActive, setIsPoemActive] = useState(false);
    const [isDefaultActive, setIsDefaultActive] = useState(true); // default all blackout poems are showed

    const handleClickPoems = function(){
        let newFilteredCardList = props.cardData.filter((card) => {
            return card.textType === "poem";
        });
        setIsPoemActive(!isPoemActive);
        setIsDefaultActive(false);
        setFilteredCardList(newFilteredCardList);
    }
    const handleClickDefault = function(){
        let newFilteredCardList = props.cardData.filter((card) => {
            return card.textType === "template";
        });
        setIsDefaultActive(!isDefaultActive);
        setIsPoemActive(false);
        setFilteredCardList(newFilteredCardList);
    }

    const cardList = filteredCardList.map((textObj) => {
        return <ExploreTextCard textObj={textObj} handlePreviewPoem={props.handlePreviewPoem} key={textObj.key} />
    })
    
    return (
        <div>
        {/* //explore page side */}
            <nav className="filter-sort">
                {/* //filter buttons at the top of the page */}
                <ul>
                    <button type="button" className={isPoemActive ? "active filter-buttons btn btn-primary" : "filter-buttons btn btn-primary"} aria-label="Poems" onClick={handleClickPoems}>
                        Poems</button>
                    <button type="button" className={isDefaultActive ? "active filter-buttons btn btn-primary" : "filter-buttons btn btn-primary"} aria-label="Both new literature and poems" onClick={handleClickDefault}>
                        Templates</button>

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
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="Ethnic"
                                    name="Ethnic"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    inline
                                    label="Politics"
                                    name="Politics"
                                    type={type}
                                    id={`inline-${type}-3`}
                                />
                                <Form.Check
                                    inline
                                    label="Drama"
                                    name="Drama"
                                    type={type}
                                    id={`inline-${type}-4`}
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

    return(
        <div className="explore-card" > 
            {/* sends you to explore 2 if you click on the card */}
            <Link to="/ExplorePreview" aria-label={"card" + textObj.title} onClick = {handleClick}>
            {/* //card */}
                <p className="lit">
                    {text}
                </p>
                <ul className="description-card">
                    <li><b>Title: </b>{textObj.title}</li>
                    <li><b>Author: </b></li>
                    <li><b>Source: </b>{textObj.sourceTitle}</li>
                    <li><b>Source Author: </b>{textObj.sourceAuthor}</li>
                    <li><b>Description: </b>{textObj.description}</li>
                    <li><b>Subject: </b>{textObj.subject}</li>
                </ul>
            </Link>
        </div>
    ) 
}

