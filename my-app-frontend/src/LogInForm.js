import React, {useState} from "react";


function LogInForm ({toggleSignUp}) {

   
    
    return (
    <> {toggleSignUp?
        <form className="UserSignUp">
        <label>Username: </label>
            <input type="text" name="user_name"/>
            <label>Password: </label>
            <input type="password" name="password"/>
            <label>Confirm Password: </label>
            <input type="password" name="confirm_password"/>
        </form> 
        :
        <form className="UserLogIn">
            <label>Username: </label>
            <input type="text" name="user_name"/>
            <label>Password: </label>
            <input type="password" name="password"/>
        </form>
    }
    </>
    )
}

export default LogInForm