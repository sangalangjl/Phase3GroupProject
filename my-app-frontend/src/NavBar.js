import React, {useState} from "react";
import UserLogIn from "./UserLogIn";
import logoGameChangeR from "./assests/logoGameChangeR.png"

function NavBar ({setShowMyGame, BASE_URL, setSessionID}) {

    const [toggleLogin, setToggleLogin] = useState(false)
    
    return (
        <div className="NavBar">
            <div className="logoNtitle">
                <img className="Navlogo" src={logoGameChangeR} alt="logo"/>
                <p className="Navtitle">Game ChangR</p>
            </div>
            <div className="GamesNLogIn">
                <div className="NavAllGames">
                    <button onClick={() => setShowMyGame(false)}>All Games</button>
                </div>
                <div className="NavMyGames">
                    <button onClick={() => setShowMyGame(true)}>My Games</button>
                </div>
                <div className="LogInBtnContainer">
                    <button onClick={() => setToggleLogin(true)} className="NavLogInBtn">Log In</button>
                    <button onClick={() => setToggleLogin(true)}className="NavRegBtn">Register?</button>
                </div>
            </div>
            
                {toggleLogin ?  <div className="ToggleLogReg"><UserLogIn BASE_URL={BASE_URL} setSessionID={setSessionID}/> </div> : null}            
        </div>
    )
}

export default NavBar