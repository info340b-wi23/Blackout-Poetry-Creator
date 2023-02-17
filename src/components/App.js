import React from 'react';

import { NavBar } from './Navbar.js';
import { Footer } from './Footer.js';

import { CreatingUpload, CreatingBlackout, CreatingFinalizing } from './Creating.js'; // Change this for YOUR page imports!


// This component is for testing purposes only! Create your own component that follows the app template below (replacing with your components)


function App() {
  return (
    <>
      <header>
        <NavBar currentPage="Creating"/> {/* Change current page to be "Explore" or "About" if you have these pages */}
      </header>
      <CreatingUpload/> {/* Change this component to be more relevant to your pages */}
      <Footer/>
    </>
  );
}

export default App;
