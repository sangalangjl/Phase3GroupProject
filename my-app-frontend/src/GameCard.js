import React, {useState, useEffect} from "react";

function GameCard ({game, BASE_URL, sessionID, userGamesArray, setUserGamesArray, displayUserGames, showMyGame, gamesArray, setGamesArray, setDisplayUserGames}) {
    
    const {title, genre, platform, game_played, id} = game


    const [isPlayed, setIsPlayed] = useState(game_played)
    const [isInWishlist, setIsInWishList] = useState(true)

    // if (showMyGame === false)
        useEffect(() => {
            setIsInWishList((userGamesArray.find(game => id === game.game_id) !== undefined) ? true : false)
        }, [isInWishlist, userGamesArray])  

        const handleOnClickWishlist = (e) => {

            const gameId = {
                game_id: id
            }

            const headers = {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(gameId)
            }

            fetch(`${BASE_URL}/users/${sessionID}/user_game_list`, headers)
            .then(r => r.json())
            .then(data => {
                setUserGamesArray([...userGamesArray, data])
                setIsInWishList(!isInWishlist)
            })
        }

        const handleDeleteFromWishlist = () => {
            const ugl = userGamesArray.find(game => id === game.game_id)

            fetch(`${BASE_URL}/users/${sessionID}/user_game_list/${ugl.id}`, {method: "DELETE"})
            
            setUserGamesArray(userGamesArray.filter(game => game.game_id !== id))
            setIsInWishList(!isInWishlist)

            if (showMyGame === true) {
                setDisplayUserGames(displayUserGames.filter(game => game.id !== id))
            }
        }

    const handleOnClickIsPlayed = (e) => {

        const toggle_game_played = {
            game_played: !isPlayed
        } 

        const headers = {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(toggle_game_played)
        }

        fetch(`${BASE_URL}/games/${id}`, headers)
        .then(r => r.json())
        .then(data => console.log(data))
        
        setIsPlayed(!isPlayed)
    }
    
    return (
        <div className="cardContainer">
            <div>{title}</div>
            <div>{genre}</div>
            <div>{platform}</div>
            <div>
                {isPlayed ? 
                    <button onClick={handleOnClickIsPlayed}>Click to Toggle Not Played Game</button>
                    : 
                    <button onClick={handleOnClickIsPlayed}>Already Played</button>}
            </div>
            {isInWishlist ? 
                <button onClick={handleDeleteFromWishlist}>In Wishlist</button>
            : 
                <button onClick={handleOnClickWishlist}>Add to Wishlist</button>
            }
        </div>
    )
}

export default GameCard