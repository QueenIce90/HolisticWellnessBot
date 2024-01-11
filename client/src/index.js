// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navigation'; // Import Navbar component

const rootContainer = document.getElementById('root');

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App  Navbar={Navbar}/>
    </React.StrictMode>
  </Router>,
  rootContainer
);

reportWebVitals();


function toggleDarkAndLightMode() {
  // Get the root element of the document
  const root = document.documentElement;

  // Check if the current mode is dark
  const isDarkMode = root.classList.contains('dark-mode');

  // Toggle the class based on the current mode
  if (isDarkMode) {
      root.classList.remove('dark-mode');
      root.classList.add('light-mode');
  } else {
      root.classList.remove('light-mode');
      root.classList.add('dark-mode');
  }
}

// Usage Example
// Add an event listener to a button or any other element that triggers the toggleDarkAndLightMode function
const toggleButton = document.getElementById('toggle-button');
toggleButton.addEventListener('click', toggleDarkAndLightMode);







