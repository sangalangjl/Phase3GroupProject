import React from "react";

function GameCard ({game}) {
    const {title, genre, platform, game_played} = game
    
    return (
    <div className="cardContainer">
        <div>{title}</div>
        <div>{genre}</div>
        <div>{platform}</div>
        <div>{game_played}</div>
    </div>
    
    )
}

export default GameCard