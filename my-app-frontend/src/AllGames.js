import React, {useState} from "react";
import GameCard from './GameCard'
import placeholder from './assests/placeholder.jpg'

function AllGames ({gamesArray, BASE_URL, sessionID, userGamesArray, setUserGamesArray, showMyGame, setGamesArray}) {

    const platformArray = ["Console", "PC", "Mac", "Mobile", "VR"]
    const genreArray = ["Shooters", "Role-Playing", "Action-Adventure", "Survival and Horror", "Platformer"]
    const [formData, setFormData] = useState({
        title: "",
        //add image url
        platform: "",
        genre: ""
    })
    console.log(gamesArray)

    const displayGameCards = gamesArray.map(game => 
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
        />
    )

    const platformOptions = platformArray.map((platform, index) => 
        <li key={index}>
            <input type="radio" value={platform} name={platform} id={platform} onChange={handleOnChange}/>
            <label>
                {platform}
            </label>
        </li>
    )

    const genreOptions = genreArray.map((genre, index) => 
        <li key={index}>
            <input type="radio" value={genre} name={genre} id={genre} onChange={handleOnChange}/>
            <label>
                {genre}
            </label>
        </li>
    )

    const handleOnClickAddGame = (e) => {
        console.log(e) //click will render add game form 
    }

    function handleOnChange(e) {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        const headers = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }

        fetch(`${BASE_URL}/games/create`, headers)
        .then(r => r.json())
        .then(data => console.log(data))
    }

    return (
    <div className="AllGamesContainer">
        <img className="AddGameCard" src={placeholder} alt="AddGameCard" onClick={handleOnClickAddGame}/>
        {displayGameCards}
        <div className="GameCardForm">
            <form onSubmit={handleOnSubmit}>
                <input type="text" placeholder="Title" onChange={handleOnChange} name="title"/>
                <input type="url" placeholder="Image URL"/>
                <ul className="platform">{platformOptions}</ul>
                <ul className="genre">{genreOptions}</ul>
                <input type="submit"/>
            </form>
        </div>
        
    </div>

    )
}

export default AllGames