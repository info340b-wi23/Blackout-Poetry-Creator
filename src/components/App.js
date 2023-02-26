import { React, useState } from 'react';

import { NavBar } from './Navbar.js';
import { Footer } from './Footer.js';

import { Creating } from './Creating.js'; 
import { UploadTab, BlackoutTab, FinalizingTab } from './CreatingSideTabs.js';
import { CreatingPreview } from './CreatingPreview.js';

import { Route, Routes } from 'react-router-dom';
import { UserProfile } from './UserProfile.js';
import { AboutLandingPage } from './AboutLandingPage.js';
import { AboutInstructionPage } from './AboutInstructionPage.js';
import { AboutArticle } from './AboutArticle.js';

function App({poemData}) {

  const [poemArray, setPoemArray] = useState(poemData); // An array of poem objects that can have pre-existing poems in it

  // Note: this data does not persist yet, so poems will be deleted on refresh
  // In the future might figure out how to write to the json file
  const handlePoemArrayChange = (PoemObj) => {
    setPoemArray([...poemArray, PoemObj]);
  }

  return (
    <>
      <header>
        <Routes>
          <Route path=":currPage/:subPage?" element={<NavBar />}/>
        </Routes>
      </header>
      <Routes>
        {/* Replace the element in this later with index.html since it is the main (default) page */}
        <Route index element={<NavBar />}/>

        {/* Catch-all route (Make the comment code later when all pages are in to avoid a bug) */}
        {/* <Route path="*" element={<index />}/> */}

        {/* Add a 'Route' to the name of your page and the element used to render it */}
        <Route path="creating" element={<Creating handlePoems = {handlePoemArrayChange}/>}>
          <Route path="upload" key="upload" element={[<UploadTab/>, <CreatingPreview/>]}/>
          <Route path="blackout" key="blackout" element={[<BlackoutTab/>, <CreatingPreview/>]}/>
          <Route path="finalizing" key="finalizing" element={[<FinalizingTab/>, <CreatingPreview/>]}/>     
          <Route index element={[<UploadTab/>, <CreatingPreview/>]}/>   
        </Route>

        {/*About page routes */}
        <Route path="about" element={<AboutLandingPage />} />
        <Route path="about/instructions" element={<AboutInstructionPage />} />
        <Route path="about/what-is-blackout-poetry" element={<AboutArticle />} />

        <Route path="userprofile/:username?" element={<UserProfile/>}/>


        {/* TESTING ROUTE FOR CREATING BELOW */}
        {/* <Route path="/index.html" element={<Index poems={poemArray}/>}/> */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

// // Testing function
// function Index(props) {
//   const poemArray = props.poems;
//   return poemArray.map((poem) => {
//     const textContent = poem.textContent;
//     return <li>{textContent}</li>;
//   });
// }