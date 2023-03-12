import React, {useState, useEffect} from 'react';
import {ExploreFilterList} from './ExploreOther.js';
import {ExploreSearchBar} from './ExploreSearch.js';

export function Explore(props){

    const [searchQuery, setSearchQuery] = useState(""); // Current search value
    const [cards, setCards] = useState(props.cardData);

    useEffect(() => {
        setCards(props.cardData); // needed because once the database loads, the poems load in so we have to change it after render
    }, [props.cardData]);

    function handleSearchQuery(searchQuery) {
        setSearchQuery(searchQuery);
        // Some code that now goes through cards and filters it then sends it to handleCards to change our cards
        if (searchQuery === "") {
            handleCards(props.CardData)
        } else {
           // filter through current cards attributes to find if matches search query value and add to a new cards array
           // handleCards();
        }
    }

    function handleCards(newCards) { // Will use search query to sort through our cards and then filter data based on what we want to see
        setCards(newCards)
    }

    return(
        <main className="explore-main">
            <section className="left-side">
                {/* <!-- Search bar/ side --> */}
                <ExploreSearchBar searchQuery={searchQuery} handleSearchQuery={handleSearchQuery}/>
            </section>

            <section className="right-side">
                {/* <!-- explore page side --> */}
                <div className="explore-container">
                    {/* <!-- set of cards with lit and poems on them --> */}
                    <ExploreFilterList freshCards={props.cardData} handleSearchQuery={handleSearchQuery} cardData={cards} handlePreviewPoem={props.handlePreviewPoem}/>
                </div>
            </section>
        </main>
    )
}