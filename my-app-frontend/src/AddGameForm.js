import React, {useState} from "react"
import AddGame from './assests/AddGame.png'
import Xicon from './assests/Xicon.png'

function AddGameForm({BASE_URL, setShowGameForm, manualToggle, setManualToggle, sessionID}) {

    const platformArray = ["Console", "PC", "Mac", "Mobile", "VR"]
    const genreArray = ["Shooters", "Role-Playing", "Action-Adventure", "Survival and Horror", "Platformer"]
    const [togglePlatform, setTogglePlatform] = useState(false)
    const [toggleGenre, setToggleGenre] = useState(false)
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        platform: "",
        genre: "",
        user_id: sessionID
    })

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
        if(formData.title === "" || formData.image === "" || formData.platform === "" || formData.genre === "") return;
        const headers = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }

        fetch(`${BASE_URL}/games/creategame`, headers)
        .then(resp => resp.json())
        .then(data => {
            setFormData({
                title: "",
                image: "",
                platform: "",
                genre: "",
                user_id: sessionID
            })
        })

        setManualToggle(!manualToggle)
        setTogglePlatform(false)
        setToggleGenre(false)
    }

    return(
        <div className="GameCardForm">
            <form>
                <div className="FormImage">
                    <img src={formData.image === "" ? AddGame : formData.image} alt="Add a Game Form"/>
                </div>
                <div className="FormInput">
                    <input type="text" placeholder="Title" onChange={handleOnChange} name="title" value={formData.title}/>
                </div>
                <div className="FormInput">
                    <input type="url" onChange={handleOnChange} placeholder="Image URL" name="image" value={formData.image}/>                
                </div>
            </form>
            <div className="FormBtnContainer">
                {/* Buttons are now outside the form to prevent the auto submit every time they are toggled */}
                <button className="PlatformBtn" onClick={() => setTogglePlatform(!togglePlatform)}>Platform</button>
                <button className="FormSubmitBtn" onClick={handleOnSubmit}>Add Game</button>
                <button className="GenreBtn" onClick={() => setToggleGenre(!toggleGenre)}>Genre</button>
            </div>

            {togglePlatform ? 
                    <div className="PlatformBtnContainer">
                        <ul className="platform">
                            {platformOptions}
                        </ul>
                    </div> 
            : null}
            {toggleGenre ? <div className="GenreBtnContainer">
                    <ul className="genre">
                        {genreOptions}
                    </ul>
                </div> 
            : null}
            <img className="gameFormX" onClick={()=>setShowGameForm(false)} src={Xicon} alt="X"/>
        </div>
    )
}

export default AddGameForm