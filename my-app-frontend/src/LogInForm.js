import React, {useState} from "react";


function LogInForm ({toggleSignUp, BASE_URL}) {
    

    const [formData, setFormData] = useState({
        name: "",
        password: ""
    })

    function postData(headers) {
        fetch(`${BASE_URL}/users`, headers)
        .then(resp => resp.json())
        .then(userData => console.log(userData))
    }

    function handleSubmit(e) {
        e.preventDefault()
        
        const headers = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }

        postData(headers)


    }

    function handleOnChange(e) {
        setFormData({...formData, [e.target.name]:e.target.value})
    }


    return (
        <>
            <form className="UserSignUp" onSubmit={handleSubmit}>
            <label>Username: </label>
                <input type="text" name="name" onChange={handleOnChange}/>
                <label>Password: </label>
                <input type="password" name="password" onChange={handleOnChange}/>
                {toggleSignUp? 
                <>
                    <label>Confirm Password: </label> 
                    <input type="password" name="confirm_password"/> 
                </>: null } 
            <input type="submit" />
            </form> 
        </>
    )
}

export default LogInForm