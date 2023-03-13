import React, {useState, useEffect} from 'react';
import {ExploreFilterList} from './ExploreOther.js';
import {ExploreSearchBar} from './ExploreSearch.js';

export function Explore(props){
    // props.cardData = all cards (no filters)
    const [searchQuery, setSearchQuery] = useState(""); // Current search value
    const [cards, setCards] = useState(props.cardData);

    useEffect(() => {
        setCards(props.cardData); // needed because once the database loads, the poems load in so we have to change it after render
    }, [props.cardData]);
    
    function handleSearchQuery(searchQuery) {
        let modifiedSearchQuery = searchQuery.toLowerCase();
        setSearchQuery(modifiedSearchQuery);
        // Some code that now goes through cards and filters it then sends it to handleCards to change our cards
        if (modifiedSearchQuery === "") {
            setCards(props.cardData)
        } else {
            // filter through current cards attributes to find if matches search query value and add to a new cards array
            const filteredCards = props.cardData.filter((card) => {
                const title = card.title.toLowerCase();
                const sourceAuthor = card.sourceAuthor.toLowerCase();
                const sourceTitle = card.sourceTitle.toLowerCase();
                const description = card.description.toLowerCase();
                const subject = card.subject.toLowerCase();
                const search = modifiedSearchQuery.toLowerCase();
                return title.includes(search) || sourceAuthor.includes(search) || sourceTitle.includes(search) || description.includes(search) || subject.includes(search);
            });
            setCards(filteredCards);
        }
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
                    <ExploreFilterList key={cards.length} freshCards={props.cardData} handleSearchQuery={handleSearchQuery} cardData={cards} handlePreviewPoem={props.handlePreviewPoem}/>
                </div>
            </section>
        </main>
    )
}