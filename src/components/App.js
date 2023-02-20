import React from 'react';

import { NavBar } from './Navbar.js';
import { Footer } from './Footer.js';

import { Creating } from './Creating.js'; // Change this for YOUR page imports!
import { UploadTab, BlackoutTab, FinalizingTab } from './CreatingSideTabs.js';
import { UploadingPreview, BlackoutPreview, FinalizingPreview } from './CreatingPreview.js';

import { Route, Routes } from 'react-router-dom';
import { UserProfile } from './UserProfile.js';

// This component is for testing purposes only! Create your own component that follows the app template below (replacing with your components)

function App() {
  return (
    <>
      <header>
        <Routes>
          {/* Add a 'Route' for the correct NavBar on your page. currentPage will either be "About" or "Explore" */}
          <Route path="creating/upload" element={<NavBar currentPage="Creating"/>}/>
          <Route path="creating/blackout" element={<NavBar currentPage="Creating"/>}/>
          <Route path="creating/finalizing" element={<NavBar currentPage="Creating"/>}/>
          <Route path="userprofile.html" element={<NavBar/>}/>
        </Routes>
      </header>
      <Routes>
        {/* Add a 'Route' to the name of your page and the element used to render it */}
        <Route path="creating" element={<Creating/>}>
          <Route path="upload" element={[<UploadTab/>, <UploadingPreview/>]}/>
          <Route path="blackout" element={[<BlackoutTab/>, <BlackoutPreview/>]}/>
          <Route path="finalizing" element={[<FinalizingTab/>, <FinalizingPreview/>]}/>        
        </Route>
        <Route path="userprofile.html" element={<UserProfile/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
