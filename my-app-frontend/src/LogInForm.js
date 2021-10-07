import React, {useState} from "react";

function LogInForm ({toggleSignUp, BASE_URL, setSessionID}) {
    
    const [confirmPassword, setConfirmPassword] = useState ("")
    const [formData, setFormData] = useState({
        name: "",
        password: ""
    })

    function postData(headers) {
        toggleSignUp ? fetch(`${BASE_URL}/users/signup`, headers) : fetch(`${BASE_URL}/users/login`, headers)
        .then(resp => resp.json())
        .then(userID => {

            switch (userID) {
                case "a": 
                    console.log("Wrong Password")
                break;
                case "b":
                    console.log("User doesn't exist")
                break;
                default:  setSessionID(userID)               
            }
        })
    }
    
    // fetch(serverEndpoint, {  
    //   credentials: 'include' 

    function handleSubmit(e) {
        e.preventDefault()

        const headers = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }

        if (toggleSignUp) {
            //if that's true then password and confirm password must match
            if (formData.password === confirmPassword){
                postData(headers)
            }else {
                console.log("Passwords do not match")
            }
        }else {
            postData(headers)
        }               
    }

    function handleOnChange(e) {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    return (
        <>
            <form className="UserSignUp" onSubmit={handleSubmit}>
                <div className="UserLogIn">
                    <label>Username: </label>
                    <input type="text" name="name" onChange={handleOnChange}/>
                </div>
                <div>
                    <label className="UserPW">Password: </label>
                    <input type="password" name="password" onChange={handleOnChange}/>
                </div>
                {toggleSignUp? 
                    <>
                        <label>Confirm Password: </label> 
                        <input type="password" name="confirm_password" onChange={(e) => setConfirmPassword(e.target.value)}/> 
                    </>
                : null } 
            <input value={toggleSignUp ? "Register" : "Log In"} type="submit"/>
            </form> 
        </>
    )
}

export default LogInForm