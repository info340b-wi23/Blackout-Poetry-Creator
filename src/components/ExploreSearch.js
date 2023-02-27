import { React, useState, useEffect } from 'react';

export function ExploreSearchBar(){
    const [searchHistoryArray, setSearchHistoryArray] = useState(["search 1", "search 2", "search 3"]);

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

    function clearHistory() { //should help clear search history 
        let searchHistoryArray = [];
        setSearchHistoryArray(searchHistoryArray);
    }

    let recentlySearched = searchHistoryArray.map((element, i) => {
        let item =(<div key={i} className="history">
            <a href="/index" className="sidebar" >{element}</a>
            <a href="/index" className="delete" onClick={handleExploreSearchList}> x</a>
        </div>);
        return item;
    });

    // searchHistoryArray.unshift(textInput.value); //adds the item to the beginning of the array

    return(
        <form>
            <div>
                <label htmlFor="search bar">Search Bar</label>
                <input type="search" id="mySearch" name="search-bar" className="search-bar" placeholder="Search New Poems" />
                {recentlySearched}
                <div className="history">
                    <button onClick={clearHistory} className="search-history">Clear Search History</button>
                </div>
            </div>
        </form>
    )
}
