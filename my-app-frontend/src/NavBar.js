import React, {useState} from "react";
import UserLogIn from "./UserLogIn";
import logoGameChangeR from "./assests/logoGameChangeR.png"
import loginbackground from "./assests/loginbackground.png"
import Xicon from "./assests/Xicon.png"

function NavBar ({setShowMyGame, BASE_URL, sessionUsername, setSessionID, setSessionUsername, toggleLogin, setToggleLogin, setDisplayUserGames, errorMessage, setErrorMessage}) {

    const [toggleSignUp, setToggleSignUp] = useState(false)

    function handleOnClickReg() {
        setErrorMessage("")
        setToggleLogin(true)
        setToggleSignUp(true)
    }

    function handleOnClickLogIn() {
        setErrorMessage("")
        setToggleLogin(true)
        setToggleSignUp(false)
    }

    function handleOnClickLogOut(){
        setSessionUsername("")
        setSessionID(0)
        setDisplayUserGames([])
    }
    
    function handleOnClickAllGames(){
        setShowMyGame(false)
        setToggleLogin(false)
    }

    function handleOnClickMyGames(){
        setShowMyGame(true)
        setToggleLogin(false)
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
                        <button onClick={handleOnClickAllGames}>All Games</button>
                    </div>
                    <div className="NavMyGames">
                        <button onClick={handleOnClickMyGames}>My Games</button>
                    </div>
                    {sessionUsername === ""?
                        <div className="LogInBtnContainer">
                            <button onClick={handleOnClickLogIn} className="NavLogInBtn">Log In</button>
                            <button onClick={handleOnClickReg} className="NavRegBtn">Register?</button>
                        </div>
                    :
                        <div className="LogOutBtnContainer" onClick={handleOnClickLogOut}>
                            <button className="NavLogOutBtn">
                                {`${sessionUsername}`}
                            </button>
                            <p className="NavLogOutText">(Log out?)</p>
                        </div>
                    }
                </div>        
            </div>
            
            {toggleLogin ?
            <div className="ToggleLogRegContainer">
                <div className="ToggleLogReg">
                    <img className="ToggleLogRegBG" src={loginbackground} alt="loginbackground"/>
                    <div className="USemptySpace"/>
                    <UserLogIn 
                        BASE_URL={BASE_URL} 
                        setSessionID={setSessionID} 
                        toggleSignUp={toggleSignUp} 
                        setToggleSignUp={setToggleSignUp}
                        setToggleLogin={setToggleLogin}
                        setSessionUsername={setSessionUsername}
                        errorMessage={errorMessage} 
                        setErrorMessage={setErrorMessage}
                    /> 
                    <img className="LogInLogo" src={logoGameChangeR} alt="logoGameChangeR"/>
                    <img className="XIcon" onClick={() => setToggleLogin(false)}src={Xicon} alt="Xicon"/>
                </div> 
            </div>
            : null}
        </> 
    )
}

export default NavBar