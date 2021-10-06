import React, {useState} from "react";
import GameCard from './GameCard'
import placeholder from './assests/placeholder.jpg'

function AllGames ({gamesArray, BASE_URL}) {
    const displayGameCards = gamesArray.map(game => <GameCard game={game} key={game.id}/>)

    const [formData, setFormData] = useState({
        title: "",
        //add image url
        platform: "",
        genre: ""
    })


    const handleOnClick = (e) => {
        console.log(e)
    }

    function handleOnChange(e) {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        const headers = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        fetch(`${BASE_URL}/games`, headers)
        .then(r => r.json())
        .then(data => console.log(data))
    }

    const platformArray = ["Console", "PC", "Mac", "Mobile", "VR"]
    const platformOptions = platformArray.map((platform, index) => 
        <li key={index}>
            <input type="radio" value={platform} name={platform} id={platform} onChange={handleOnChange} name="platform"/>
            <label for={platform}>
                {platform}
            </label>
        </li>
    )

    const genreArray = ["Shooters", "Role-Playing", "Action-Adventure", "Survival and Horror", "Platformer"]
    const genreOptions = genreArray.map((genre, index) => 
    <li key={index}>
        <input type="radio" value={genre} name={genre} id={genre} onChange={handleOnChange} name="genre"/>
        <label for={genre}>
            {genre}
        </label>
    </li>
)

    return (
    <div className="AllGamesContainer">
        <img className="AddGameCard" src={placeholder} alt="AddGameCard" onClick={handleOnClick}/>
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