import React, {useState} from "react";
import LogInForm from "./LogInForm";

function UserLogIn () {
    const [toggleSignup, setToggleSignUp] = useState(false)
    
    return (
    <div><LogInForm toggleSignup={toggleSignup}/></div>
    )
}

export default UserLogIn