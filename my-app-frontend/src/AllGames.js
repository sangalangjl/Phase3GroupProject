import React from "react";
import GameCard from './GameCard'
import AddGameForm from "./AddGameForm";
import AddGameCard from "./AddGameCard"

function AllGames ({gamesArray, BASE_URL, sessionID, userGamesArray, setUserGamesArray, showMyGame, displayUserGames, setDisplayUserGames, manualToggle, setManualToggle, setGamesArray, showGameForm, setShowGameForm, setToggleLogin, setErrorMessage}) {

    const displayGameCards = gamesArray.map(game => 
        <GameCard 
            key={game.id}
            game={game} 
            BASE_URL={BASE_URL}
            sessionID={sessionID}
            gamesArray={gamesArray}
            setGamesArray={setGamesArray}
            userGamesArray={userGamesArray}
            setUserGamesArray={setUserGamesArray}
            showMyGame={showMyGame}
            displayUserGames={displayUserGames} 
            setDisplayUserGames={setDisplayUserGames}
            manualToggle={manualToggle}
            setManualToggle={setManualToggle}      
        />
    )
    return (
    <div className="AllGamesContainer">
        <AddGameCard
            setShowGameForm={setShowGameForm}
            setToggleLogin={setToggleLogin}
            sessionID={sessionID}
            setErrorMessage={setErrorMessage}
        />
        {displayGameCards}
        {showGameForm ? 
            <AddGameForm 
            setShowGameForm={setShowGameForm} 
            BASE_URL={BASE_URL}
            manualToggle={manualToggle}
            setManualToggle={setManualToggle}
            sessionID={sessionID}
        />   
        : null}  
    </div>

    )
}

export default AllGames