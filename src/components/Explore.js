import React from 'react';
import ExploreSearchBar from 'ExploreSearchBar';

export function Explore(){
    return(
        <header>
            <NavBar />
            <div className ="flexbox-container">
                {/* components */}
                <ExploreSearchBar />
            </div>
            <Footer />
        </header>
    )
}