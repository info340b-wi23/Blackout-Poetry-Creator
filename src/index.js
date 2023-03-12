import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import App from './components/App.js';

import { BrowserRouter } from 'react-router-dom';

import { initializeApp } from "firebase/app";

import 'whatwg-fetch';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMayG2OIVLMLSV5varPpsTCQkwwvfmbyw",
  authDomain: "blackout-poetry-b1dcf.firebaseapp.com",
  projectId: "blackout-poetry-b1dcf",
  storageBucket: "blackout-poetry-b1dcf.appspot.com",
  messagingSenderId: "614581028735",
  appId: "1:614581028735:web:4b13a6fb4aeb46ac48bc4a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

// I used this type of event listener in a past web dev class which pretty much fires
// right before the user leaves the page
// The purpose of this is to delete what is in the text boxes on the finalizing creating tab because it will persist
// even if the user had submitted the poem. 
// https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event
window.addEventListener("beforeunload", function() {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
  sessionStorage.clear(); // clear the session storage when we leave any of the creating pages
});



