import React from 'react';

export function ExploreFilterList(props){
    let cardList = props.cardData; // passed in the origional array from poems.jsan
    let subjectList = [];

    filterCardList(cardList, "both"); 
    
    const handleClickLit = function(){
        filterCardList(cardList, "literature", subjectList); 
    }
    const handleClickPoems = function(){
        filterCardList(cardList, "poem", subjectList);
    }
    const handleClickBoth = function(){
        filterCardList(cardList, "both", subjectList); 
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
            <exploreCardList />
        </div>
    );
}

function filterCardList(inputList, typeOfText, subjectList){
    //let newInputList = [];
    //this function will filter the texts based on the type of text (poem or lit) and based on the fliter checkbox (drama, culture, ect) 
    return exploreCardList(inputList);
}

function exploreCardList(props){
    let cards = props.cards;
    const cardList = cards.map((textObj) => {
        return <exploreTextCard textObj={textObj} key={textObj.key}/>
    })
    
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

     const handleClick = function(){
        textForExplorePreview(textObj);
    }

    return(
        <div className="explore-card" > 
            {/* sends you to explore 2 if you click on the card */}
            <a href="/ExplorePreview" aria-label={"card" + textObj.title} onClick = {handleClick}>
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