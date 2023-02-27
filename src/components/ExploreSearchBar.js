import React from 'react';

{/* Search bar / side */}
export function ExploreSearchBar(){
    return(
        <section className="left-side">
            <ExploreSearchInput />
            <ExploreTrending />
            <ExploreNewTexts />
            <ExploreSearchHistory />
            <ClearSearchHistory />
        </section>
    )
}

function ExploreSearchInput(){
    return (
        <form> 
            <div>
                <label for="search bar">Search Bar</label>
                <input type="search" id="mySearch" name="search-bar" className="search-bar" placeholder="Search New Poems" />
            </div>
        </form>
    );
    
}

function ExploreTrending(){
    return (
        // link to trending texts
        <div className="trending">
            <a href="/index" className="sidebar"><b>Trending</b></a>
        </div>
    );
}

function ExploreNewTexts(){
    {/* link to new texts */}
    return (
        <div className="history">
        <   a href="/index" className="sidebar"><b>New</b></a>
        </div>
    );
}

function ExploreSearchHistory(){
    {/* things that the user has searched for in the past, list of a history of search items */}
    return (
        <div>
            <div className="history">
                <a href="/index" className="sidebar">#something</a>
                <a href="/index" className="delete"> x</a>
            </div>
            <div className="history">
                <a href="/index" className="sidebar">recent1</a>
                <a href="/index" className="delete"> x</a>
            </div>
        </div>
    );  
}

function ClearSearchHistory(){
   return (
    <div className="history">
        <a href="/index" className="sidebar search-history">Clear Search History</a>
    </div>
   );
}