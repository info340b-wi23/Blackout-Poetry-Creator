import React from 'react';

export function ExploreFilterList(props){
    let cardList = props.cardData; 
    let subjectList = [];

    exploreCardList(cardList, "both"); 
    
    const handleClickLit = function(){
        exploreCardList(cardList, "literature", subjectList); 
    }
    const handleClickPoems = function(){
        exploreCardList(cardList, "poem", subjectList);
    }
    const handleClickBoth = function(){
        exploreCardList(cardList, "both", subjectList); 
    }
    
    return (
        <div>
        {/* //explore page side */}
            <nav className="filter-sort">
                {/* //filter buttons at the top of the page */}
                <ul>
                    <button type="button" className="filter-buttons btn btn-primary" aria-label="literature" onClick={handleClickLit}>
                        Literature</button>
                    <button type="button" className="filter-buttons btn btn-primary" aria-label="Poems" onClick={handleClickPoems}>
                        Poems</button>
                    <button type="button" className="filter-buttons active btn btn-primary" aria-label="Both new literature and poems" onClick={handleClickBoth}>
                        Both</button>

                {/* //Filter button check box */}
                    <div id="filter" className="filter-check filter-buttons btn btn-primary" tabindex="100">
                        <span className="anchor">Filter</span>
                        <ul className="items">
                            <li><input type="checkbox" className="checkbox" />Culture </li>
                            <li><input type="checkbox" className="checkbox"/>Ethnic</li>
                            <li><input type="checkbox" className="checkbox"/>Politics </li>
                            <li><input type="checkbox" className="checkbox"/>Drama </li>
                        </ul>
                    </div>
                </ul>
            </nav>
            {/* check to see in you need additional div or <elements /> */}
            {viewCardList}
        </div>
    );
}

function exploreFilter(subjectList){
    // if something is clicked filter the deck for cards w/ that subject
}

function exploreCardList(props, typeOfText, subject){
    let cards = props.cards;
    
    if(subject.length === 0){
        // when the fliter checkboxes are NOT checked
        if(typeOfText === "both"){
            const cardList = cards.map((textObj) => {
                return <exploreTextCards textObj={textObj} key={textObj.key}/>
            })
        } else if (typeOfText === "literature"){
            const cardList = cards.map((textObj) => {
                if(textObj.textType === "literature"){
                    return <exploreTextCards textObj={textObj} key={textObj.key}/>
                } 
            })
        } else if (typeOfText === "poem"){
            const cardList = cards.map((textObj) => {
                if(textObj.textType === "poem"){
                    return <exploreTextCards textObj={textObj} key={textObj.key}/>
                } 
            })
        }
    } else{
        // when the fliter checkboxes are checked
        exploreFilter(subject); 
    }
    
    return(
        <div className="explore-container">
            {/* set of cards */}
            {cardList}
        </div>
    )
}

function exploreTextCard(props){
    const textObj = props.textObj;
     // textObj is an object from the array in poems.jason 

    return(
        <div className="explore-card" > 
            {/* sends you to explore 2 if you click on the card */}
            <a href="explore2.js" aria-label={"card" + textObj.title}>
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