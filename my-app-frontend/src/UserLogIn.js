import React from "react";
import LogInForm from "./LogInForm";

function UserLogIn ({BASE_URL, setSessionID, toggleSignUp, setToggleSignUp, setToggleLogin, setSessionUsername, errorMessage, setErrorMessage}) {
    
    function handleToggle() {
        setToggleSignUp((toggleSignUp) => !toggleSignUp)
        setErrorMessage("")
    }

    return (
        
    <div className="userLoginContainer">
        <button className="toggleButton" onClick={handleToggle}>{toggleSignUp ? "Log In" : "Register?"}</button>
        <LogInForm 
            toggleSignUp={toggleSignUp} 
            BASE_URL={BASE_URL} 
            setSessionID={setSessionID}
            setToggleLogin={setToggleLogin}
            setSessionUsername={setSessionUsername}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
        />
    </div>
    )
}

export default UserLogIn

// next: use-state to store info. 
// test info in backend