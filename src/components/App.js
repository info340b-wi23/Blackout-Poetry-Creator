import { React, useState, useEffect } from 'react';

import { getAuth, onAuthStateChanged } from 'firebase/auth'

import { NavBar } from './Navbar.js';
import { Footer } from './Footer.js';

import { MenuBar } from './menu.js';
import { Explore } from './Explore.js';
import { Creating } from './Creating.js'; 
import { ExplorePreview } from './ExplorePreview.js';
import { UploadTab, BlackoutTab, FinalizingTab } from './CreatingSideTabs.js';
import { CreatingPreview } from './CreatingPreview.js';

import { SignInPage } from './SignInPage';
import { Route, Routes } from 'react-router-dom';
import { UserProfile } from './UserProfile.js';
import { AboutLandingPage } from './AboutLandingPage.js';
import { AboutInstructionPage } from './AboutInstructionPage.js';
import { AboutArticle } from './AboutArticle.js';

import { getDatabase, ref, push as firebasePush, onValue } from 'firebase/database'

import TEMPLATES from "../data/poems.json"

// This is the main implementation of the application over java script
function App() {
  const templateArray = TEMPLATES.poems; // For template page
  const [poemArray, setPoemArray] = useState(templateArray); // Will hold blackout poems
  const [focusedPoem, setFocusedPoem] = useState({}); // Used if the user wants to use a template and hit "create" button in explore preview
  const [previewPoem, setPreviewPoem] = useState({}); // Used if user is in explore preview
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const poemsRef = ref(db, "poems");
  
    onValue(poemsRef, (snapshot) => {
      const poemsObj = snapshot.val(); 
      const objKeys = Object.keys(poemsObj);
      const objArray = objKeys.map((keyString) => {
        poemsObj[keyString].key = keyString;
        return poemsObj[keyString];
      });
      setPoemArray(objArray);
    });

    const unregisterFunction = onAuthStateChanged(getAuth(), function(firebaseUser) {    
      if(firebaseUser){ //firebaseUser defined: is logged in
        console.log('logged in', firebaseUser.displayName);
      } else { //firebaseUser is undefined: is not logged in
        console.log('logged out');
      }
      setCurrentUser(firebaseUser);
    })

    function cleanup() {
      unregisterFunction(); //call the unregister function
    }
    return cleanup; //effect hook callback returns the cleanup function

  }, []);

  // Change the focused poem (if selected from the explore page and also remove all blackouts)
  // Update all the fields in the creating tab to be cleared out ONLY if it is a template (because user-created poems should save progress)
  const handleFocusedPoem = (poemObj) => { 
    setFocusedPoem(poemObj);
    if (Array.isArray(poemObj.textContent)) { // if the text content is actually a json object
      sessionStorage.setItem("words", JSON.stringify(poemObj.rawText)); // use the raw text without any HTML as the text
    } else {
      if (poemObj.textContent) { // If the poem has text content, then we need to convert the text into a array. This prevents an error from typed text
        sessionStorage.setItem("words", JSON.stringify(poemObj.textContent.split(/\s+/)));
      }
    }
    sessionStorage.setItem("clickedWords", JSON.stringify([])); // Empty the blacked out words since the text changed

    // Everything below will fire if the text is a template or pre-existing poem
    // We don't want to change these when text is entered because then it will always erase what the user put in it!
    if (poemObj.subject) {
      sessionStorage.setItem("selectedValue", poemObj.subject);
    }
    if (poemObj.title) {
      sessionStorage.setItem("title", "");
    }
    if (poemObj.sourceTitle) {
      sessionStorage.setItem("sourceTitle", poemObj.sourceTitle);
    }
    if (poemObj.sourceAuthor) {
      sessionStorage.setItem("sourceAuthor", poemObj.sourceAuthor);
    }
    if (poemObj.description) {
      sessionStorage.setItem("description", "");
    }
  }

  // For the explore preview page
  const handlePreviewPoem = (poemObj) => {
    setPreviewPoem(poemObj);
  }
  
  // Change and push to Firebase new poem templates if user submits it
  const handlePoemArrayChange = (PoemObj) => {
    setPoemArray([...poemArray, PoemObj]);
    
    const db = getDatabase();
    const poemsRef = ref(db, "poems");
    firebasePush(poemsRef, PoemObj)
      .then(() => console.log("Data saved successfully!"))
      .catch(err => console.log(err));
  }

  return (
    <>
      <header>
        <Routes>
          <Route path=":currPage?/:subPage?" element={<NavBar currentUser={currentUser} />}/>
        </Routes>
      </header>
      <Routes>
        {/* Replace the element in this later with index.html since it is the main (default) page */}
        <Route index element={<Explore cardData={poemArray} handlePreviewPoem={handlePreviewPoem}/>}/>

        {/* Catch-all route */}
        <Route path="*" element={<Explore cardData={poemArray} handlePreviewPoem={handlePreviewPoem}/>}/>

        <Route path="signin" element={<SignInPage />} />

        {/* Add a 'Route' to the name of your page and the element used to render it */}
        <Route path="creating" element={<Creating handlePoems = {handlePoemArrayChange} focusedPoem = {focusedPoem} handleFocusedPoem={handleFocusedPoem}/>}>
          <Route path="upload" key="upload" element={[<UploadTab/>, <CreatingPreview/>]}/>
          <Route path="blackout" key="blackout" element={[<BlackoutTab/>, <CreatingPreview/>]}/>
          <Route path="finalizing" key="finalizing" element={[<FinalizingTab currentUser = {currentUser}/>, <CreatingPreview/>]}/>     
          <Route index element={[<UploadTab/>, <CreatingPreview/>]}/>   
        </Route>

        <Route path="/explore" element={<Explore currentUser={currentUser} cardData={poemArray} handlePreviewPoem={handlePreviewPoem}/>}/>
        <Route path="ExplorePreview" element={<ExplorePreview currentUser={currentUser} previewPoem={previewPoem} handleFocusedPoem={handleFocusedPoem}/>}/>

        <Route path="menu" element={<MenuBar currentUser={currentUser}/>}/>

        {/*About page routes */}
        <Route path="about" element={<AboutLandingPage />} />
        <Route path="about/instructions" element={<AboutInstructionPage />} />
        <Route path="about/what-is-blackout-poetry" element={<AboutArticle />} />

        <Route path={`userprofile`} element={<UserProfile currentUser={currentUser} poemArray={poemArray}/>}/>

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
