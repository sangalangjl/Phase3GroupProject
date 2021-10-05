import React, {useState} from "react";
import LogInForm from "./LogInForm";

function UserLogIn ({BASE_URL}) {
    const [toggleSignUp, setToggleSignUp] = useState(false)

    function handleToggle() {
        setToggleSignUp((toggleSignUp) => !toggleSignUp)
    }

    return (
        
    <div className="userLoginContainer">
        <button className="toggleButton" onClick={handleToggle}>Sign Up / Log In</button>
        <LogInForm toggleSignUp={toggleSignUp} BASE_URL={BASE_URL}/>
    </div>
    )
}

export default UserLogIn

// next: use-state to store info. 
// test info in backend