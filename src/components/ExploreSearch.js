import { React, useState } from 'react';

import { Link } from 'react-router-dom';

import TEMPLATES from "../data/poems.json";

export function ExploreSearchBar(props){
    const [searchHistoryArray, setSearchHistoryArray] = useState([]);

    let recentlySearched = searchHistoryArray.map((element, i) => { // Clicking on element will search for those; clicking on x deletes that element from search history
        let item =(<div key={i} className="history"> 
            <Link to="/index" className="sidebar" onClick={(element) => props.handleSearchQuery(element.target.innerText)}>{element}</Link>
            <Link to="/index" className="delete" onClick={(event) => deleteSearchListItem(event, element)}>x</Link>
        </div>);
        return item;
    });

    function deleteSearchListItem(event, element) {
        event.preventDefault();
        let newSearchArr = searchHistoryArray.filter((item) => item !== element);
        setSearchHistoryArray(newSearchArr);
    }

    function clearHistory(event) { // should help clear search history 
        event.preventDefault();
        let searchHistoryArray = [];
        setSearchHistoryArray(searchHistoryArray);
    }

    // When the ENTER key is pressed in the search bar...
    function submitSearchBar(event) {
        if (/^\s*$/.test(event.target.value) === false) { // Checks that the search is not just white space using regex (since it has no significance)
            props.handleSearchQuery(event.target.value);
            if (searchHistoryArray.includes(event.target.value)) { // If the search history has the searched value
                searchHistoryArray.splice(searchHistoryArray.indexOf(event.target.value), 1); // Get rid of the value
            }
            setSearchHistoryArray([event.target.value, ...searchHistoryArray]); // Either way, put the searched value on top 
            event.target.value = ""; // Remove the search value from the search bar
        }
    }

    // On search submit, don't cause the button to clear history and also update the search history array
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            submitSearchBar(event);
        }
    };

    return(
        <form method="GET" action="">
            <div>
                <label htmlFor="search bar">Search Bar</label>
                <input type="search" id="mySearch" className="search-bar" placeholder="Search New Poems" defaultValue={props.searchQuery} onKeyDown={handleKeyDown} />
                {recentlySearched}
                <div className="history">
                    <button onClick={clearHistory} className="search-history">Clear Search History</button>
                </div>
            </div>
        </form>
    )
}
