import React, {useEffect, useState} from "react";
import NavBar from './NavBar';
import './App.css';
import MyGames from "./MyGames";
import AllGames from "./AllGames";
import GameCard from "./GameCard";


function App() {
  const BASE_URL = "http://localhost:9292"
  const [gamesArray, setGamesArray] = useState([])
  const [userGamesArray, setUserGamesArray] = useState([])
  const [sessionID, setSessionID] = useState(1) //change back to 0 before publish

  useEffect(() => {
    const headers = {
      method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({id: sessionID})
      }
    fetch(`${BASE_URL}/games/pageload`, headers)
    .then(r => r.json())
    .then(games => {
      console.log(games)
      setGamesArray(games[0])
      setUserGamesArray(games[1])
      })
  }, [])


  return (
    <div>Loading Game ChangR
      <NavBar BASE_URL={BASE_URL} setSessionID={setSessionID}/>
      <AllGames BASE_URL={BASE_URL} gamesArray={gamesArray} sessionID={sessionID} userGamesArray={userGamesArray}/>
      {/* <MyGames/> */}
    </div> 
  )
}

export default App;
