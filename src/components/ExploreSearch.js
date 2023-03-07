import { React, useState } from 'react';

import { Link } from 'react-router-dom';

export function ExploreSearchBar(){
    const [searchHistoryArray, setSearchHistoryArray] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); // Current search value

    let recentlySearched = searchHistoryArray.map((element, i) => {
        let item =(<div key={i} className="history">
            <Link to="/index" className="sidebar" >{element}</Link>
            <Link to="/index" className="delete" onClick={handleExploreSearchList}> x</Link>
        </div>);
        return item;
    });


    function handleExploreSearchList(event) {
        let searchArr = searchHistoryArray;
        let item = event.target.value; // Later make it so the value is the item we want to delete
        for (var i = 0; i < searchArr.length; i++) {
            if (searchArr[i] === item) {
                searchArr.splice(i, 1);
            }
        }
        setSearchHistoryArray(searchArr);
    }

    function clearHistory(event) { // should help clear search history 
        event.preventDefault();
        let searchHistoryArray = [];
        setSearchHistoryArray(searchHistoryArray);
    }

    // When the ENTER key is pressed in the search bar...
    function submitSearchBar(event) {
        if (/^\s*$/.test(event.target.value) === false) { // Checks that the search is not just white space using regex (since it has no significance)
            setSearchQuery(event.target.value);
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
        <form>
            <div>
                <label htmlFor="search bar">Search Bar</label>
                <input type="search" id="mySearch" className="search-bar" placeholder="Search New Poems" defaultValue={searchQuery} onKeyDown={handleKeyDown} />
                {recentlySearched}
                <div className="history">
                    <button onClick={clearHistory} className="search-history">Clear Search History</button>
                </div>
            </div>
        </form>
    )
}
