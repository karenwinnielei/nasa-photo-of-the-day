import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Photo from './components/photo'
import Header from './components/header'

function App() {
  
  return (
    <div className="App">
      <h1>NASA</h1>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Photo/>
    </div>
    
  );
}

export default App;
