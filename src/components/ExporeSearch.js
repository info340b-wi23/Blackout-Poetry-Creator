import React from 'react';

// searchHistory an array of things that the user has previously looked up
let searchHistoryArray = ["search 1", "search 2", "search 3"];

//takes in the search input, where the user will type
export function ExploreSearchBar(textInput){
    searchHistoryArray.unshift(textInput); //adds the item to the beginning of the array
    return(
        <form>
            <div>
                <label for="search bar">Search Bar</label>
                <input type="search" id="mySearch" name="search-bar" className="search-bar" placeholder="Search New Poems" />
            </div>
        </form>
    )
}

function exploreSearchList(){
    let searchArr = searchHistoryArray;
    const handleClick = function(item){ //should help clear specific item 
        for(var i = 0; i < searchHistoryArray.length; i++){ 
            if ( searchHistoryArray[i] === item) { 
                searchHistoryArray.splice(i, 1); 
            }
        }
    }
    let displayedItems = searchArr.forEach(element => {
        <div className="history">
            <a href="index.html" clasNames="sidebar" >{element}</a>
            <a href="index.html" className="delete" onClick={handleClick}> x</a>
        </div>
    })
    return(
       {displayedItems}
    )
}

export function ExploreSearchHistory(){
    const handleClick = function(event){ //should help clear search history 
        searchHistoryArray = [];
    }
    exploreSearchList;
    return(
        <div>
            {exploreSearchList}

            <div className="history" onClick={handleClick}>
                <a href="index.html" className="sidebar search-history">Clear Search History</a>
            </div>
        </div>
    )
}
