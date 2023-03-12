import { React, useState } from 'react';

import { Link } from 'react-router-dom';

import TEMPLATES from "../data/poems.json";

//import 'whatwg-fetch';

export function ExploreSearchBar(){
    const [searchHistoryArray, setSearchHistoryArray] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); // Current search value

    let recentlySearched = searchHistoryArray.map((element, i) => {
        let item =(<div key={i} className="history">
            <Link to="/index" className="sidebar" >{element}</Link>
            <Link to="/index" className="delete" onClick={deleteSearchListItem}> x</Link>
        </div>);
        return item;
    });

    //still trying to get this function to work
    function deleteSearchListItem(event) {
        event.preventDefault();
        let searchArr = searchHistoryArray;
        // let index = searchArr.indexOf(element); 
        // let newSearchArr = searchArr.splice(index, 1);
        let newSearchArr = searchArr.pop();
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
            setSearchQuery(event.target.value);
            if (searchHistoryArray.includes(event.target.value)) { // If the search history has the searched value
                searchHistoryArray.splice(searchHistoryArray.indexOf(event.target.value), 1); // Get rid of the value
            }
            setSearchHistoryArray([event.target.value, ...searchHistoryArray]); // Either way, put the searched value on top 
            event.target.value = ""; // Remove the search value from the search bar
            searchingCards(TEMPLATES);
        }
    }

    //traversing through the card list to find titles that match the input typed into the search bar
    // this is not working I will try later to send a fetch request
    function searchingCards(cardsArray){
        // let input = document.getElementById('mySearch');
        // input = input.toLowerCase();
        // let elements = cardsArray;
        // let newTemplateArr = [];
        // for(let i = 0; i < elements.length; i++){
        //     let cardTitle = elements[i].title;
        //     if(!cardTitle.toLowerCase().includes(input)){
        //         elements[i].style.display="none";
        //     } else{
        //         elements[i].style.display="";
        //         newTemplateArr.push(elements[i]);
        //     }
        // }
        // return newTemplateArr;
    }

    // On search submit, don't cause the button to clear history and also update the search history array
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            submitSearchBar(event);
        }
    };

    return(
        <form role="form" method="GET" action="">
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
