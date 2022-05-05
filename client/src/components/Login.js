import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Login({ setCurrentCompany, currentCompany }) {

    const [companyName, setCompanyName] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState()
    const [isLoaded, setIsLoaded] = useState(false)



    function handleLogin(e) {
        e.preventDefault()

        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ company_name: companyName, password: password })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.errors) {
                    setErrors(data.errors)
                } else {
                    setCurrentCompany(data)
                    setIsLoaded(true)
                }
            })
            .catch(error => console.log(error))
    }

    // useEffect(() => {
    //     fetch("/auth").then((response) => {
    //       if (response.ok) {
    //         response.json().then((user) => setCurrentCompany(user));
    //       }
    //     });
    //   }, []);


    return (
        <div className="form-container">
            <h2>Log In</h2>
            {errors && errors.map(e => <h4 style={{ color: "red" }}>{e}</h4>)}
            <form onSubmit={(e) => handleLogin(e)}>
                <label htmlFor='username'>
                    company name:
                </label>
                <input type="text" name="company name" onChange={e => setCompanyName(e.target.value)} value={companyName} />

                <label htmlFor='password'>
                    password:
                </label>

                <input type="password" name="password" onChange={e => setPassword(e.target.value)} value={password} />

                {/* {isLoaded ?
                    currentCompany ? (
                        <Link to="/">
                            <input type="submit" value="Log In"></input>
                        </Link>
                    ) : (
                        <input type="submit" value="Log In"></input>
                    ) : (
                        <input type="submit" value="Log In"></input>
                    )
                }  */}

                {currentCompany ?
                    isLoaded ? (
                        <Link to="/">
                            <input type="submit" value="Log In"></input>
                        </Link>
                    ) : (
                        <input type="submit" value="Log In"></input>
                    ) : (
                        <input type="submit" value="Log In"></input>
                    )
                } 

                {/* <Link to="/">
                    <input type="submit" value="Log In"></input>
                </Link> */}

                

            </form>
        </div>
    )
}




export default Login