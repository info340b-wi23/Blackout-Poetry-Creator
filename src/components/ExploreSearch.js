import { React, useState } from 'react';

import { Link } from 'react-router-dom';

export function ExploreSearchBar(props){
    const [searchHistoryArray, setSearchHistoryArray] = useState(JSON.parse(sessionStorage.getItem("searchHistory")) || []);
    let recentlySearched = searchHistoryArray.map((element, i) => { // Clicking on element will search for those; clicking on x deletes that element from search history
        let item =(<div key={i} className="history"> 
            <Link to="/explore" className="sidebar" onClick={(element) => props.handleSearchQuery(element.target.innerText)}>{element}</Link>
            <Link to="/explore" className="delete" onClick={(event) => deleteSearchListItem(event, element)}>x</Link>
        </div>);
        return item;
    });

    function deleteSearchListItem(event, element) { // Delete the item from search history if "x" button is clicked
        event.preventDefault();
        let newSearchArr = searchHistoryArray.filter((item) => item !== element);
        setSearchHistoryArray(newSearchArr);
        sessionStorage.setItem("searchHistory", JSON.stringify(newSearchArr));
    }

    function clearHistory(event) { // should help clear search history 
        event.preventDefault();
        let searchHistoryArray = [];
        setSearchHistoryArray(searchHistoryArray);
        sessionStorage.setItem("searchHistory", JSON.stringify(searchHistoryArray));
    }

    // When the ENTER key is pressed in the search bar...
    function submitSearchBar(event) {
        if (/^\s*$/.test(event.target.value) === false) { // Checks that the search is not just white space using regex (since it has no significance)
            props.handleSearchQuery(event.target.value);
            if (searchHistoryArray.includes(event.target.value)) { // If the search history has the searched value
                searchHistoryArray.splice(searchHistoryArray.indexOf(event.target.value), 1); // Get rid of the value
            }
            setSearchHistoryArray([event.target.value, ...searchHistoryArray]); // Either way, put the searched value on top 
            sessionStorage.setItem("searchHistory", JSON.stringify([event.target.value, ...searchHistoryArray]));
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
