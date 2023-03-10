import{React, useState} from 'react';

import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

export function ExploreFilterList(props){
    let cards = props.cardData;
    console.log(cards);
    const [filteredCardList, setFilteredCardList] = useState(cards); 
    
    // Handles whether the button is currently "active" highlighted. Very hard-coded approach
    const [isPoemActive, setIsPoemActive] = useState(false);
    const [isDefaultActive, setIsDefaultActive] = useState(true); // default all blackout poems are showed
    
    const handleClickPoems = function(){
        let newFilteredCardList = cards.filter((card) => {
            return card.textType === "poem";
        });
        setIsPoemActive(!isPoemActive);
        setIsDefaultActive(false);
        setFilteredCardList(newFilteredCardList);
    }
    const handleClickDefault = function(){
        let newFilteredCardList = cards.filter((card) => {
            return card.textType === "template";
        });
        setIsDefaultActive(!isDefaultActive);
        setIsPoemActive(false);
        setFilteredCardList(newFilteredCardList);
    }

    const cardList = filteredCardList.map((textObj) => {
        return <ExploreTextCard textObj={textObj} key={textObj.key} />
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


function ExploreTextCard(props){
    let textObj = props.textObj;
     // textObj is an object from the array in poems.jason 

    const handleClick = function(){
        textForExplorePreview(textObj);
    }

    return(
        <div className="explore-card" > 
            {/* sends you to explore 2 if you click on the card */}
            <Link to="/ExplorePreview" aria-label={"card" + textObj.title} onClick = {handleClick}>
            {/* //card */}
                <p className="lit">
                    {textObj.textContent}
                </p>
                <ul className="description-card">
                    <li>{textObj.title}</li>
                    <li>{textObj.sourceTitle}</li>
                    <li>{textObj.sourceAuthor}</li>
                    <li>{textObj.description}</li>
                    <li>{textObj.subject}</li>
                </ul>
            </Link>
        </div>
    ) 
}

export function textForExplorePreview(textObj){
        const exportText = textObj;
        return exportText;
}

