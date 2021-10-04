import React, {useState} from "react";
import LogInForm from "./LogInForm";

function UserLogIn () {
    const [toggleSignUp, setToggleSignUp] = useState(false)
   
    function handleToggle() {
        setToggleSignUp((toggleSignUp) => !toggleSignUp)
    }

    return (
        
    <div className="userLoginContainer">
        <button className="toggleButton" onClick={handleToggle} />
        <LogInForm toggleSignUp={toggleSignUp}/>
    </div>
    )
}

export default UserLogIn