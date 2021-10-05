import React from "react";
import UserLogIn from "./UserLogIn";

function NavBar ({BASE_URL}) {
    
    return (
    <div><UserLogIn BASE_URL={BASE_URL}/></div>
    )
}

export default NavBar