import React, {useEffect, useState} from "react";
import NavBar from './NavBar';
import './App.css';
import MyGames from "./MyGames";
import AllGames from "./AllGames";

function App() {
  
  const BASE_URL = "http://localhost:9292"
  const [gamesArray, setGamesArray] = useState([])
  const [userGamesArray, setUserGamesArray] = useState([])
  const [sessionID, setSessionID] = useState(0) //change back to 0 before publish
  const [sessionUsername, setSessionUsername] = useState("")
  const [displayUserGames, setDisplayUserGames] = useState()
  const [showMyGame, setShowMyGame] = useState(false)
  const [manualToggle, setManualToggle] = useState(false)
  const [showGameForm, setShowGameForm] = useState(false)
  const [toggleLogin, setToggleLogin] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

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
  }, [sessionID, manualToggle])

  useEffect(() => {
      fetch(`${BASE_URL}/users/${sessionID}`)
      .then(r => r.json())
      .then(userGamesArray => setDisplayUserGames(userGamesArray))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionID, manualToggle])

  return (
    <div className="AppContainer">
      <NavBar
        BASE_URL={BASE_URL} 
        sessionUsername={sessionUsername}
        setSessionID={setSessionID} 
        setShowMyGame={setShowMyGame}
        setSessionUsername={setSessionUsername}
        toggleLogin={toggleLogin}
        setToggleLogin={setToggleLogin}
        setDisplayUserGames={setDisplayUserGames}
        errorMessage={errorMessage} 
        setErrorMessage={setErrorMessage}
      />
      <div className="GamesContainer">
        {showMyGame ? 
          <MyGames 
            BASE_URL={BASE_URL} 
            sessionID={sessionID}
            displayUserGames={displayUserGames} 
            showMyGame={showMyGame}
            userGamesArray={userGamesArray} 
            setUserGamesArray={setUserGamesArray}
            setDisplayUserGames={setDisplayUserGames}
            manualToggle={manualToggle}
            setManualToggle={setManualToggle}
            showGameForm={showGameForm} 
            setShowGameForm={setShowGameForm}
            setToggleLogin={setToggleLogin}
            setErrorMessage={setErrorMessage}
          /> 
        : 
          <AllGames
            BASE_URL={BASE_URL} 
            sessionID={sessionID}  
            gamesArray={gamesArray}
            showMyGame={showMyGame}
            userGamesArray={userGamesArray} 
            setUserGamesArray={setUserGamesArray}
            displayUserGames={displayUserGames} 
            setDisplayUserGames={setDisplayUserGames}
            manualToggle={manualToggle}
            setManualToggle={setManualToggle}
            manualToggle={manualToggle}
            setManualToggle={setManualToggle}
            showGameForm={showGameForm} 
            setShowGameForm={setShowGameForm}
            setToggleLogin={setToggleLogin}
            setErrorMessage={setErrorMessage}
          />
        }
      </div> 
    </div> 
  )
}

export default App;
