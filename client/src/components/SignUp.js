import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom"

function SignUp({ setCurrentCompany }) {

    const [companyName, setCompanyName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const history = useHistory()

    function handleCreateAccount(e) {
        e.preventDefault()
        fetch('/companies', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({company_name: companyName, password: password})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            // if(data.errors){
                // setErrors(data.errors)
            // }else {
                
                setCurrentCompany(data)
                history.push('/') 
            // }
        })
        // .catch(error => console.log(error))
    }


    

    return (
        <div>
            <h2> Sign Up </h2>
            <form className="sign-up-form" onSubmit={(e) => handleCreateAccount(e)}>
                <label htmlFor="username">company name:</label>
                <input type="text" name="company name" placeholder="" onChange={(e) => setCompanyName(e.target.value)}/>
                <label htmlFor="password">password:</label>
                <input type="text" name="password" placeholder="" onChange={(e) => setPassword(e.target.value)}/>
                <label htmlFor="confirm-password">confirm password:</label>
                <input type="text" name="confirm password" placeholder="" onChange={(e) => setConfirmPassword(e.target.value)}/>
                <Link to="logged-in">
                    <input type="submit" name="sign up"></input>
                </Link>
            </form>
        </div>
    )
}

export default SignUp