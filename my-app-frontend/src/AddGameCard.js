import React from "react";
import GamePlayed from './assests/GamePlayed.png'
import AddBookmark from "./assests/AddBookmark.png"
import AddGame from "./assests/AddGame.png"

function AddGameCard({setShowGameForm, setToggleLogin, sessionID, setErrorMessage}){

    function handleOnClick(){
        if(sessionID === 0){
            setToggleLogin(true)
            setErrorMessage("Login or Register to Add a Game")
        }else{
            setShowGameForm(true)
        }
    }

    return(
        <div className="cardContainer" onClick= {handleOnClick}>
            <div className="AddCardImageContainer">
                <img src={AddGame} alt={AddGame}/>
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
    )
}

export default AddGameCard