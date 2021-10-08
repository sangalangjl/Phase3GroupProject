import React, {useEffect, useState} from "react";
import NavBar from './NavBar';
import './App.css';
import MyGames from "./MyGames";
import AllGames from "./AllGames";

function App() {
  
  const BASE_URL = "http://localhost:9292"
  const [gamesArray, setGamesArray] = useState([])
  const [userGamesArray, setUserGamesArray] = useState([])
  const [sessionID, setSessionID] = useState(32) //change back to 0 before publish
  const [displayUserGames, setDisplayUserGames] = useState()
  const [showMyGame, setShowMyGame] = useState(false)

  useEffect(() => {
    
    const headers = {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id: sessionID})
    }
    
    fetch(`${BASE_URL}/games/pageload`, headers)
    .then(r => r.json())
    .then(games => {
      setGamesArray(games[0])
      setUserGamesArray(games[1])
    })
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
      fetch(`${BASE_URL}/users/${sessionID}`)
      .then(r => r.json())
      .then(userGamesArray => setDisplayUserGames(userGamesArray))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionID])

  return (
    <div className="AppContainer">
      <NavBar BASE_URL={BASE_URL} setSessionID={setSessionID} setShowMyGame={setShowMyGame}/>
        <div className="GamesContainer">
          {showMyGame ? 
            <MyGames 
              BASE_URL={BASE_URL} 
              sessionID={sessionID} 
              displayUserGames={displayUserGames} 
              showMyGame={showMyGame}
              userGamesArray={userGamesArray} 
              setUserGamesArray={setUserGamesArray}
              gamesArray={gamesArray} 
              setGamesArray={setGamesArray}
              setDisplayUserGames={setDisplayUserGames}
            /> 
          : 
            <AllGames 
              BASE_URL={BASE_URL} 
              sessionID={sessionID}  
              gamesArray={gamesArray} 
              showMyGame={showMyGame}
              userGamesArray={userGamesArray} 
              setUserGamesArray={setUserGamesArray}
              setGamesArray={setGamesArray}
              displayUserGames={displayUserGames} 
              setDisplayUserGames={setDisplayUserGames}
            />
        }
      </div> 
    </div> 
  )
}

export default App;
