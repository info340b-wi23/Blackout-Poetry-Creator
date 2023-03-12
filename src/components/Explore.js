import React from 'react';
import {ExploreFilterList} from './ExploreOther.js';
import {ExploreSearchBar} from './ExploreSearch.js';

export function Explore(props){
    return(
        <main className="explore-main">
            <section className="left-side">
                {/* <!-- Search bar/ side --> */}
                <ExploreSearchBar/>
            </section>

            <section className="right-side">
                {/* <!-- explore page side --> */}
                <div className="explore-container">
                    {/* <!-- set of cards with lit and poems on them --> */}
                    <ExploreFilterList cardData={props.cardData} handlePreviewPoem={props.handlePreviewPoem}/>
                </div>
            </section>
        </main>
    )
}