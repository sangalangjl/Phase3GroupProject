import React from "react";
import GameCard from './GameCard'

function AllGames ({gamesArray}) {
   const displayGameCards = gamesArray.map(game => <GameCard game={game} key={game.id}/>)
    return (
    <div>
        {displayGameCards}
    </div>
    )
}

export default AllGames