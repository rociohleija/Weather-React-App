import React from "react";
import Weather from "./Weather";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
     <Weather defaultCity="houston"/> 
     <footer>
       This project was coded by{" "} 
       <a href="https://astonishing-pixie-d099a0.netlify.app/">Rocio Hernandez
       </a>{" "}
       and is{" "} 
       <a href="https://github.com/rociohleija/Weather-React-Application">open-source on GitHub.</a>
     </footer>
     </div>
    </div>
  );
}


