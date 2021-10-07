import React from "react";
import UserLogIn from "./UserLogIn";
import logoGameChangeR from "./assests/logoGameChangeR.png"

function NavBar ({setShowMyGame}) {
    
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
                    <button className="NavLogInBtn">Log In</button>
                    <button className="NavRegBtn">Register?</button>
                </div>
            </div>
            {/* <UserLogIn BASE_URL={BASE_URL} setSessionID={setSessionID}/> */}
        </div>
    )
}

export default NavBar