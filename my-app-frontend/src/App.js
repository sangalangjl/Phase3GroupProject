import React from "react";
import NavBar from './NavBar';
import './App.css';


function App() {
  const BASE_URL = "http://localhost:9293"

  return (
    <div>Loading Game ChangR
      <NavBar BASE_URL={BASE_URL}/>
    </div> 
  )
}

export default App;
