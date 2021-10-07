import React, {useState} from "react";
import GameCard from './GameCard'
import GamePlayed from './assests/GamePlayed.png'
import AddBookmark from "./assests/AddBookmark.png"
import AddGame from "./assests/AddGame.png"
import AddGameForm from "./AddGameForm";

function AllGames ({gamesArray, BASE_URL, sessionID, userGamesArray, setUserGamesArray, showMyGame, setGamesArray, displayUserGames, setDisplayUserGames}) {



    const [showGameForm, setShowGameForm] = useState(false)

    const displayGameCards = gamesArray.map(game => 
        <>
            <GameCard 
                key={game.id}
                game={game} 
                BASE_URL={BASE_URL}
                sessionID={sessionID}
                userGamesArray={userGamesArray}
                setUserGamesArray={setUserGamesArray}
                showMyGame={showMyGame}
                gamesArray={gamesArray} 
                setGamesArray={setGamesArray}
                displayUserGames={displayUserGames} 
                setDisplayUserGames={setDisplayUserGames}          
            />
        </>
        
    )
    return (
    <div className="AllGamesContainer">
        <div className="cardContainer">
            <div className="AddCardImageContainer">
                <img src={AddGame} alt={AddGame} onClick= {() => setShowGameForm(true)}/>
            </div>
            <div className="CardTNG">
                <div className="CardTitle">Add a Game</div>
            </div>
            <div className="CardOpts">
                <div className="CardPlayed"> 
                    <img src={GamePlayed} alt="Game Played?"/>
                </div>
                <div className="CardPlatform"><img alt="Platform Icon" src={`https://raw.githubusercontent.com/sangalangjl/Phase3GroupProject/master/my-app-frontend/src/assests/PC.png`}/></div>
                <div className="CardWL">
                        <img src={AddBookmark} alt="Add to Wishlist"/>
                </div>
            </div>
        </div>
        {displayGameCards}
        {showGameForm ? <AddGameForm setShowGameForm={setShowGameForm} BASE_URL={BASE_URL}/>  : null}  
    </div>

    )
}

export default AllGames