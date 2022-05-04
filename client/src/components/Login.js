import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

    const [companyName, setCompanyName] = useState('')
    const [password, setPassword] = useState('')
   
    function handleLogin(e) {
        e.preventDefault()

        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({company_name: companyName, password: password})
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }


    return (
        <div className="form-container">
            <h2>Log In</h2>
            {/* {errors && errors.map(e => <h4 style={{color: "red"}}>{e}</h4>)} */}
            <form onSubmit={(e) => handleLogin(e)}>
                <label htmlFor='username'>
                    company name: 
                </label>
                <input type="text" name="company name"  onChange={e => setCompanyName(e.target.value)} value={companyName}/>
                
                <label htmlFor='password'>
                    password: 
                </label>
                
                <input type="password" name="password" onChange={e => setPassword(e.target.value)} value={password}/>
                <Link to="logged-in">
                    <input type="submit" value="Log In"></input>
                </Link>
            </form>
        </div>
    )
}




export default Login