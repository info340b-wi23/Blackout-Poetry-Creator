import { React, useState } from 'react';

import { NavBar } from './Navbar.js';
import { Footer } from './Footer.js';

import { Creating } from './Creating.js'; // Change this for YOUR page imports!
import { UploadTab, BlackoutTab, FinalizingTab } from './CreatingSideTabs.js';
import { CreatingPreview } from './CreatingPreview.js';

import { Route, Routes } from 'react-router-dom';
import { UserProfile } from './UserProfile.js';

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
          {/* Add a 'Route' for the correct NavBar on your page. currentPage will either be "About" or "Explore" */}
          <Route index element={<NavBar/>}/>

          <Route path="creating" element={<NavBar currentPage="Creating"/>}/>
          <Route path="creating/upload" element={<NavBar currentPage="Creating"/>}/>
          <Route path="creating/blackout" element={<NavBar currentPage="Creating"/>}/>
          <Route path="creating/finalizing" element={<NavBar currentPage="Creating"/>}/>

          <Route path="userprofile.html" element={<NavBar/>}/>
        </Routes>
      </header>
      <Routes>
        {/* Add a 'Route' to the name of your page and the element used to render it */}
        <Route path="creating" element={<Creating handlePoems = {handlePoemArrayChange}/>}>
          <Route index element={[<UploadTab/>, <CreatingPreview/>]}/>
          <Route path="upload" key="upload" element={[<UploadTab/>, <CreatingPreview/>]}/>
          <Route path="blackout" key="blackout" element={[<BlackoutTab/>, <CreatingPreview/>]}/>
          <Route path="finalizing" key="finalizing" element={[<FinalizingTab/>, <CreatingPreview/>]}/>        
        </Route>
        {/* TESTING ROUTE FOR CREATING BELOW */}
        {/* <Route path="/index.html" element={<Index poems={poemArray}/>}/> */}
        <Route path="/userprofile.html" element={<UserProfile/>}/>
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