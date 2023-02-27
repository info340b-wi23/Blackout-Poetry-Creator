import React from 'react';
import {NavBar} from 'Navbar.js';
import {Footer} from 'Footer';
import {ExploreFilterList} from 'ExploreOther.js';
import {ExploreSearchBar, ExploreSearchHistory} from 'ExploreSearch.js';

import SAMPLE_TEXT from '../data/poems.json';

export function Explore() {
    return(
        <div> 
            <main className="explore-main">
                <section className="left-side">
                    {/* <!-- Search bar/ side --> */}
                    {ExploreSearchBar}
                    {ExploreSearchHistory}
                    
                </section>

                <section className="right-side">
                {/* <!-- explore page side --> */}
                    {/* ExploreFilterButtons */}
                    <div className="explore-container">
                        {/* <!-- set of cards with lit and poems on them --> */}
                        <ExploreFilterList cardData={SAMPLE_TEXT}/>
                    </div>
                </section>
            </main>
        </div>
    );
}