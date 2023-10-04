import React from "react";
import Weather from "./Weather";
import Main from './Main';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div>
        <Main />
      </div>
      <div className="container">
     <Weather defaultCity="Houston"/> 
     <footer>
       This project was coded by{" "} 
       <a href="https://astonishing-pixie-d099a0.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
        Rocio Hernandez
       </a>{" "}
       and is{" "} 
       <a href="https://github.com/rociohleija/Weather-React-Application"
          target="_blank"
          rel="noopener noreferrer"
       >
        open-source on GitHub.
       </a>
     </footer>
     </div>
    </div>
  );
}


