import React, {useState} from "react"
import AddGame from './assests/AddGame.png'

function AddGameForm({BASE_URL, setShowGameForm}) {

    const platformArray = ["Console", "PC", "Mac", "Mobile", "VR"]
    const genreArray = ["Shooters", "Role-Playing", "Action-Adventure", "Survival and Horror", "Platformer"]
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        platform: "",
        genre: ""
    })

    const [togglePlatform, setTogglePlatform] = useState(false)
    const [toggleGenre, setToggleGenre] = useState(false)

    function handleOnChange(e) {
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    
    const platformOptions = platformArray.map((platform, index) => 
        <li key={index}>
            <input type="radio" value={platform} name="platform" id={platform} onChange={handleOnChange}/>
            <label>
                {platform}
            </label>
        </li>
    )

    const genreOptions = genreArray.map((genre, index) => 
        <li key={index}>
            <input type="radio" value={genre} name="genre" id={genre} onChange={handleOnChange}/>
            <label>
                {genre}
            </label>
        </li>
    )

    const handleOnSubmit = (e) => {
        e.preventDefault()

        const headers = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }

        fetch(`${BASE_URL}/games/creategame`, headers)
        .then(r => r.json())
        .then(data => console.log(data))

        setShowGameForm(false)
    }


    return(
        <div className="GameCardForm">
            <form onSubmit={handleOnSubmit}>
                <div className="FormImage">
                    <img src={ formData.image === "" ? AddGame : formData.image} alt="Add a Game Form"/>
                    <input type="url" onChange={handleOnChange} placeholder="Image URL" name="image"/>
                </div>

                <input type="text" placeholder="Title" onChange={handleOnChange} name="title"/>
                <div className="FormBtnContainer">
                    <button className="PlatformBtn" onClick={() => setTogglePlatform(!togglePlatform) }>Platform</button>
                    
                    <input className="FormSubmitBtn" value="Add Game" type="submit"/>

                    <button className="GenreBtn" onClick={() => setToggleGenre(!toggleGenre) }>Genre</button>
                </div>
                {togglePlatform ? <div className="PlatformBtnContainer">
                    <ul className="platform">{platformOptions}</ul>
                </div> : null}
                {toggleGenre ? <div className="GenreBtnContainer">
                    <ul className="genre">{genreOptions}</ul>
                </div> : null}
            </form>
        </div>
    )
}

export default AddGameForm