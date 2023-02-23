import React from 'react';

export function ExploreFilterButtons(){
    return (
        <section class="right-side">
        {/* //explore page side */}
            <nav class="filter-sort">
                {/* //filter buttons at the top of the page */}
                <ul>
                    <a href="explore-newLit.html"><button type="button" class="filter-buttons btn btn-primary" aria-label="literature">
                        Literature</button></a>
                    <a href="explore-poems.html"><button type="button" class="filter-buttons btn btn-primary" aria-label="Poems">
                        Poems</button></a>
                    <a href="index.html"><button type="button" class="filter-buttons active btn btn-primary" aria-label="Both new literature and poems">
                        Both</button></a>
                    
                    {/* //Sort By button and dropdown menu */}
                    <select type="button" class="form-select filter-buttons btn btn-primary"  aria-label="Sort">
                        <option disabled selected>Sort By</option>
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                        <option value="a-z">A - Z</option>
                        <option value="z-a">Z - A</option>
                        <option value="popular">Popular</option>
                   </select>

                {/* //Filter button check box */}
                    <div id="filter" class="filter-check filter-buttons btn btn-primary" tabindex="100">
                        <span class="anchor">Filter</span>
                        <ul class="items">
                            <li><input type="checkbox" class="checkbox"/>Culture </li>
                            <li><input type="checkbox" class="checkbox"/>Ethnic</li>
                            <li><input type="checkbox" class="checkbox"/>Politics </li>
                            <li><input type="checkbox" class="checkbox"/>Drama </li>
                        </ul>
                    </div>
                </ul>
            </nav>
        </section>
    );
}

export function exploreCardList(){
    <div class="explore-container">
        {/* //set of cards with lit and poems on them  */}
        <exploreTextCards />
    </div>
}

function exploreTextCard(){
    <div class="explore-card"> 
        <a href="explore2.html" aria-label="card 1">
            {/* //card 1 */}
            <p class="lit">
                Hermione stopped dead; Harry had heard it too.
                Somebody had moved close behind them among the
                dark bookshelves. They waited, and a moment later
                the vulturelike countenance of Madam Pince
                appeared around the corner, her sunken cheeks, her
                skin like parchment, and her long hooked nose
                illuminated unflatteringly by the lamp she was
                carrying.
                “The library is now closed,” she said. “Mind you
                return anything you have borrowed to the correct —
                what have you been doing to that book, you depraved
                boy?”
            </p>
            <ul class="description-card">
                <li>Harry Potter, Page 345</li>
                <li>JK Rowling</li>
                <li>#HarryPotter</li>
            </ul>
        </a>
    </div>
}