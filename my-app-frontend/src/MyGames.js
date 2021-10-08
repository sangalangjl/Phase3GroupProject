import React from "react";
import GameCard from "./GameCard";
import AddGameCard from "./AddGameCard"
import AddGameForm from "./AddGameForm";

function MyGames ({BASE_URL, sessionID, displayUserGames, userGamesArray, setUserGamesArray, setDisplayUserGames, gamesArray, setGamesArray, manualToggle, setManualToggle, showGameForm, setShowGameForm, setToggleLogin, setErrorMessage}) {

    const eachGame = displayUserGames === undefined ? null : displayUserGames.map(game => 
        <GameCard 
            BASE_URL={BASE_URL} 
            sessionID={sessionID}
            gamesArray={gamesArray}
            setGamesArray={setGamesArray}
            key={game.id} 
            game={game}
            userGamesArray={userGamesArray} 
            setUserGamesArray={setUserGamesArray} 
            displayUserGames={displayUserGames}
            setDisplayUserGames={setDisplayUserGames}
            manualToggle={manualToggle}
            setManualToggle={setManualToggle}
        />
    )

    return (
        <>
        <div className="MyGamesContainer">
            <AddGameCard 
                setShowGameForm={setShowGameForm}
                setToggleLogin={setToggleLogin}
                sessionID={sessionID}
                setErrorMessage={setErrorMessage}
            />
            {eachGame}
            {showGameForm ? 
                <AddGameForm 
                setShowGameForm={setShowGameForm} 
                BASE_URL={BASE_URL}
                manualToggle={manualToggle}
                setManualToggle={setManualToggle}
            />   
            : null}
        </div>
        </>
    )
}

export default MyGames