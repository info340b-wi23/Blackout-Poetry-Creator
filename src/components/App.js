import { React, useState, useEffect } from 'react';

import { NavBar } from './Navbar.js';
import { Footer } from './Footer.js';

import { MenuBar } from './Menu.js';
import { Explore } from './Explore.js';
import { Creating } from './Creating.js'; 
import { ExplorePreview } from './ExplorePreview.js';
import { UploadTab, BlackoutTab, FinalizingTab } from './CreatingSideTabs.js';
import { CreatingPreview } from './CreatingPreview.js';

import { Route, Routes } from 'react-router-dom';
import { UserProfile } from './UserProfile.js';
import { AboutLandingPage } from './AboutLandingPage.js';
import { AboutInstructionPage } from './AboutInstructionPage.js';
import { AboutArticle } from './AboutArticle.js';

import { getDatabase, ref, push as firebasePush, get } from 'firebase/database'

import TEMPLATES from "../data/poems.json"

function App() {
  const templateArray = TEMPLATES.poems; // For template page
  const [poemArray, setPoemArray] = useState(templateArray); // Will hold blackout poems

  useEffect(() => {
    const db = getDatabase();
    const poemsRef = ref(db, "0/poems");

    get(poemsRef).then((snapshot) => {
      const poemsObj = snapshot.val(); 
      const objKeys = Object.keys(poemsObj);
      const objArray = objKeys.map((keyString) => {
        poemsObj[keyString].key = keyString;
        return poemsObj[keyString];
      });
      setPoemArray(objArray);
    });
  }, []);
  
  // Change and push to Firebase new poem templates if user submits it
  const handlePoemArrayChange = (PoemObj) => {
    setPoemArray([...poemArray, PoemObj]);
    
    const db = getDatabase();
    const poemsRef = ref(db, "0/poems");
    firebasePush(poemsRef, PoemObj)
      .then(() => console.log("Data saved successfully!"))
      .catch(err => console.log(err));
  }

  return (
    <>
      <header>
        <Routes>
          <Route path=":currPage?/:subPage?" element={<NavBar />}/>
        </Routes>
      </header>
      <Routes>
        {/* Replace the element in this later with index.html since it is the main (default) page */}
        <Route index element={<Explore cardData={poemArray}/>}/>

        {/* Catch-all route */}
        <Route path="*" element={<Explore cardData={poemArray}/>}/>

        {/* Add a 'Route' to the name of your page and the element used to render it */}
        <Route path="creating" element={<Creating handlePoems = {handlePoemArrayChange}/>}>
          <Route path="upload" key="upload" element={[<UploadTab/>, <CreatingPreview/>]}/>
          <Route path="blackout" key="blackout" element={[<BlackoutTab/>, <CreatingPreview/>]}/>
          <Route path="finalizing" key="finalizing" element={[<FinalizingTab/>, <CreatingPreview/>]}/>     
          <Route index element={[<UploadTab/>, <CreatingPreview/>]}/>   
        </Route>

        <Route path="/index" element={<Explore cardData={poemArray}/>}/>
        <Route path="ExplorePreview" element={<ExplorePreview/>}/>

        <Route path="menu" element={<MenuBar/>}/>

        {/*About page routes */}
        <Route path="about" element={<AboutLandingPage />} />
        <Route path="about/instructions" element={<AboutInstructionPage />} />
        <Route path="about/what-is-blackout-poetry" element={<AboutArticle />} />

        <Route path="userprofile/:username?" element={<UserProfile/>}/>

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
