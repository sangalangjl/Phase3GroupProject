import React, {useState} from "react";

function GameCard ({game, BASE_URL, sessionID, userGamesArray}) {
    const {title, genre, platform, game_played, id} = game
    const [isPlayed, setIsPlayed] = useState(game_played)
    const [isInWishlist, setIsInWishList] = useState(console.log(userGamesArray.find(game => id === game.game_id ? true : false)))

    function handleToggleClick() {
        setIsPlayed(!isPlayed)
    }

    const handleOnClickWishlist = (e) => {
        const gameId = {
            game_id: id
        }
        const headers = {
            method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(gameId)
            }
            fetch(`${BASE_URL}/users/${sessionID}/user_game_list`, headers)
            .then(r => r.json())
            .then(data => console.log(data))
    }

    const handleOnClickIsPlayed = (e) => {
        // console.log(e)
        const toggle_game_played = {
            game_played: isPlayed
        } 

        const headers = {
        method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(toggle_game_played)
        }
        fetch(`${BASE_URL}/games/${id}`, headers)
        .then(r => r.json())
        .then(data => console.log(data))
        handleToggleClick()
    }
    
    return (
    <div className="cardContainer">
        <div>{title}</div>
        <div>{genre}</div>
        <div>{platform}</div>
        <div>{game_played}</div>
        {isInWishlist ? 
            <button onClick={handleOnClickWishlist}>In Wishlist</button>
            
        : 
            <button onClick={handleOnClickWishlist}>Add to Wishlist</button>
        }
    </div>
    
    )
}

export default GameCard