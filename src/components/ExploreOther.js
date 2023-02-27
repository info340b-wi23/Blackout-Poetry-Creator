import{React, useState} from 'react';
import { ExplorePreview } from './ExplorePreview.js'

export function ExploreFilterList(props){
    let cards = props.cardData; // passed in the origional array from poems.json

    const [filteredCardList, setFilteredCardList] = useState(cards); 
    
    // Handles whether the button is currently "active" highlighted. Very hard-coded approach
    const [isLitActive, setIsLitActive] = useState(false);
    const [isPoemActive, setIsPoemActive] = useState(false);
    const [isResetActive, setIsResetActive] = useState(true); // default all blackout poems are showed

   // filterCardList(cardList, "both"); 
    
    const handleClickLit = function(){
        let newFilteredCardList = cards.filter((card) => {
            if (card.textType === "literature") {
                return card;
            }
        });
        setIsLitActive(!isLitActive);
        setIsPoemActive(false);
        setIsResetActive(false);
        setFilteredCardList(newFilteredCardList);
    }
    const handleClickPoems = function(){
        let newFilteredCardList = cards.filter((card) => {
            if (card.textType === "poem") {
                return card;
            }
        });
        setIsPoemActive(!isPoemActive);
        setIsLitActive(false);
        setIsResetActive(false);
        setFilteredCardList(newFilteredCardList);
    }
    const handleClickReset = function(){
        setIsResetActive(!isResetActive);
        setIsPoemActive(false);
        setIsLitActive(false);
        setFilteredCardList(cards);
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
                    <button type="button" className={isLitActive ? "active filter-buttons btn btn-primary" : "filter-buttons btn btn-primary"} aria-label="literature" onClick={handleClickLit}>
                        Literature</button>
                    <button type="button" className={isPoemActive ? "active filter-buttons btn btn-primary" : "filter-buttons btn btn-primary"} aria-label="Poems" onClick={handleClickPoems}>
                        Poems</button>
                    <button type="button" className={isResetActive ? "active filter-buttons btn btn-primary" : "filter-buttons btn btn-primary"} aria-label="Both new literature and poems" onClick={handleClickReset}>
                        Reset</button>

                {/* //Filter button check box */}
                    <div id="filter" className="filter-check filter-buttons btn btn-primary" tabIndex="100">
                        <span className="anchor">Filter</span>
                        <ul className="items">
                            <li><input type="checkbox" className="checkbox"/>Culture </li>
                            <li><input type="checkbox" className="checkbox"/>Ethnic</li>
                            <li><input type="checkbox" className="checkbox"/>Politics </li>
                            <li><input type="checkbox" className="checkbox"/>Drama </li>
                        </ul>
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
    const textObj = props.textObj;
     // textObj is an object from the array in poems.jason 

     const handleClick = function(){
        textForExplorePreview(textObj);
    }

    return(
        <div className="explore-card" > 
            {/* sends you to explore 2 if you click on the card */}
            <a href="./ExplorePreview" aria-label={"card" + textObj.title} onClick = {handleClick}>
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
            </a>
        </div>
    ) 
}

export function textForExplorePreview(textObj){
        const exportText = textObj;
        return exportText;
}

