import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";

function MyGames ({BASE_URL, sessionID, displayUserGames, showMyGame, userGamesArray, setUserGamesArray, gamesArray, setGamesArray, setDisplayUserGames}) {
    // const [displayUserGames, setDisplayUserGames] = useState()

    // useEffect(() => {
    //     fetch(`${BASE_URL}/users/${sessionID}`)
    //     .then(r => r.json())
    //     .then(userGamesArray => setDisplayUserGames(userGamesArray))


    // }, [sessionID])
    console.log(displayUserGames)

    // console.log(displayUserGames).map(game => <GameCard key={game.id} game={game}/>)

    const eachGame = displayUserGames === undefined ? null : displayUserGames.map(game => 
        <GameCard 
            BASE_URL={BASE_URL} 
            sessionID={sessionID} 
            key={game.id} 
            game={game}
            showMyGame={showMyGame}
            userGamesArray={userGamesArray} 
            setUserGamesArray={setUserGamesArray} 
            gamesArray={gamesArray} 
            setGamesArray={setGamesArray}
            displayUserGames={displayUserGames}
            setDisplayUserGames={setDisplayUserGames}
        />
    )
    
    return (
    <div>{eachGame}</div>
    )
}

export default MyGames