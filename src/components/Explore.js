import React from 'react';
import {ExploreFilterButtons} from 'ExploreOther.js';

export function Explore(){
    return(
        <div> 
            <header>
                <NavBar />
            </header>
            <main class="explore-main">
                <div className ="flexbox-container">
                    {/* components */}
                    <ExploreFilterButtons />
                </div>
            </main>
            
            <Footer />
        </div>
        
        
    )
}