import React from "react";
import UserLogIn from "./UserLogIn";

function NavBar ({BASE_URL, setSessionID}) {
    
    return (
    <div><UserLogIn BASE_URL={BASE_URL} setSessionID={setSessionID}/></div>
    )
}

export default NavBar