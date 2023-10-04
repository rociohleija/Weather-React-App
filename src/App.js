import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
     <Weather defaultCity="Houston"/> 
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


