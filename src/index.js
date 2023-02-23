import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import App from './components/App.js';

import { BrowserRouter } from 'react-router-dom';

import POEM_DATA from './data/poems.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App poemData={POEM_DATA} />
    </BrowserRouter>
);

// I used this type of event listener in a past web dev class which pretty much fires
// right before the user leaves the page
// The purpose of this is to delete what is in the text boxes on the finalizing creating tab because it will persist
// even if the user had submitted the poem. 
// https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event
window.addEventListener("beforeunload", function(event) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
  sessionStorage.clear(); // clear the session storage when we leave any of the creating pages
});