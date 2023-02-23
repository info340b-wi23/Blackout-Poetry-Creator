import React from 'react';

{/* Search bar/ side */}
export function ExploreSearchBar(){
    return(
        <section className="left-side">
            <exploreSearchInput />
            <exploreTrending />
            <exploreNewTexts />
            <exploreSearchHistory />
            <clearSearchHistory />
        </section>
    )
}

function exploreSearchInput(){
    return (
        <form> 
            <div>
                <label for="search bar">Search Bar</label>
                <input type="search" id="mySearch" name="search-bar" className="search-bar" placeholder="Search New Poems" />
            </div>
        </form>
    );
    
}

function exploreTrending(){
    return (
        // link to trending texts
        <div className="trending">
            <a href="index.html" className="sidebar"><b>Trending</b></a>
        </div>
    );
}

function exploreNewTexts(){
    {/* link to new texts */}
    return (
        <div className="history">
        <   a href="index.html" className="sidebar"><b>New</b></a>
        </div>
    );
}

function exploreSearchHistory(){
    {/* things that the user has searched for in the past, list of a history of search items */}
    return (
        <div>
            <div className="history">
                <a href="index.html" className="sidebar">#something</a>
                <a href="index.html" className="delete"> x</a>
            </div>
            <div className="history">
                <a href="index.html" className="sidebar">recent1</a>
                <a href="index.html" className="delete"> x</a>
            </div>
        </div>
    );  
}

function clearSearchHistory(){
   return (
    <div className="history">
        <a href="index.html" className="sidebar search-history">Clear Search History</a>
    </div>
   );
}