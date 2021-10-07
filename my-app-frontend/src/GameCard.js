import React, {useState, useEffect} from "react";
import CheckMark from "./assests/CheckMark.png"
import AddBookmark from "./assests/AddBookmark.png"
import SavedBookMark from "./assests/SavedBookMark.png"
import GamePlayed from "./assests/GamePlayed.png"

function GameCard ({game, BASE_URL, sessionID, userGamesArray, setUserGamesArray, displayUserGames, showMyGame, gamesArray, setGamesArray, setDisplayUserGames}) {
    
    const {title, genre, platform, game_played, id, image} = game

    const [isPlayed, setIsPlayed] = useState(game_played)
    const [isInWishlist, setIsInWishList] = useState(true)

    // if (showMyGame === false)
        useEffect(() => {
            setIsInWishList((userGamesArray.find(game => id === game.game_id) !== undefined) ? true : false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            setDisplayUserGames([...displayUserGames, game])
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
            <div className="CardImageContainer">
                <img src={image} alt={image} className="CardImage"/>
            </div>
            <div className="CardTNG">
                <div className={title.length > 14 ? "CardTitleBig" : "CardTitle"}>{title}</div>
                <div className="CardGenre">{genre}</div>
            </div>
            <div className="CardOpts">
                <div className="CardPlayed">
                    {isPlayed ? 
                        <img src={GamePlayed} alt="Game Played?" onClick={handleOnClickIsPlayed}/>
                        : 
                        <img src={CheckMark} alt="Check Mark" onClick={handleOnClickIsPlayed}/>
                    }
                </div>
                <div className="CardPlatform"><img alt="Platform Icon" src={`https://raw.githubusercontent.com/sangalangjl/Phase3GroupProject/master/my-app-frontend/src/assests/${platform}.png`}/></div>
                <div className="CardWL">
                    {isInWishlist ? 
                        <img alt="Saved to Wishlist " src={SavedBookMark} onClick={handleDeleteFromWishlist}/>
                    : 
                        <img src={AddBookmark} alt="Add to Wishlist" onClick={handleOnClickWishlist}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default GameCard