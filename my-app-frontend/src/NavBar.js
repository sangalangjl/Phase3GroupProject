import React, {useState} from "react";
import UserLogIn from "./UserLogIn";
import logoGameChangeR from "./assests/logoGameChangeR.png"
import loginbackground from "./assests/loginbackground.png"
import Xicon from "./assests/Xicon.png"

function NavBar ({setShowMyGame, BASE_URL, setSessionID}) {

    const [toggleLogin, setToggleLogin] = useState(false)
    const [toggleSignUp, setToggleSignUp] = useState(false)

    function handleOnClickReg() {
        setToggleLogin(true)
        setToggleSignUp(true)
    }

    function handleOnClickLogIn() {
        setToggleLogin(true)
        setToggleSignUp(false)
    }
    
    return (
        <>
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
                        <button onClick={handleOnClickLogIn} className="NavLogInBtn">Log In</button>
                        <button onClick={handleOnClickReg} className="NavRegBtn">Register?</button>
                    </div>
                </div>        
            </div>
            {toggleLogin ?
            <div className="ToggleLogRegContainer">
                <div className="ToggleLogReg">
                    <img className="ToggleLogRegBG" src={loginbackground} alt="loginbackground"/>
                    <div className="USemptySpace"/>
                    <UserLogIn BASE_URL={BASE_URL} setSessionID={setSessionID} toggleSignUp={toggleSignUp} setToggleSignUp={setToggleSignUp}/> 
                    <img className="LogInLogo" src={logoGameChangeR} alt="logoGameChangeR"/>
                    <img className="XIcon" onClick={() => setToggleLogin(false)}src={Xicon} alt="Xicon"/>
                </div> 
            </div>
            : null}
        </> 
    )
}

export default NavBar