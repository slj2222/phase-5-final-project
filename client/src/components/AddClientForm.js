import React, { useState } from "react";
import { Link } from "react-router-dom";



function AddClientForm({ updateNewClientList }) {
    // const history = useHistory()
    const [isLoaded, setIsLoaded] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    // const [address, setAddress] = useState('')
    // const [city, setCity] = useState('')
    // const [state, setState] = useState('')
    // const [zipCode, setZipCode] = useState('')
    

    function handleSubmit(e) {
        e.preventDefault()
        // console.log("test")
        fetch("/clients", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                first_name: firstName, 
                last_name: lastName, 
                phone_number: phoneNumber, 
                email_address: emailAddress, 
                // address: address, 
                // city: city, 
                // state: state, 
                // zip_code: zipCode
            })
        })
        .then(res => res.json())
        .then(data =>{
            updateNewClientList(data)
            setIsLoaded(true)
        })
    }



    return (
        <div className="add-client-container">

           {/* {isLoaded &&  */}
                <div>
                    <h2>add new client</h2>
                
                    <form className="add-client-form" onSubmit={handleSubmit}>
                        <h3>contact information</h3>
                        <input type="text" placeholder="first name" onChange={(e) => setFirstName(e.target.value)} />
                        <input type="text" placeholder="last name" onChange={(e) => setLastName(e.target.value)} />
                        <input type="text" placeholder="phone number" onChange={(e) => setPhoneNumber(e.target.value)} />
                        <input type="text" placeholder="email address" onChange={(e) => setEmailAddress(e.target.value)} />
                        {/* for some reason the LINK is messing up the POST */}
                        {/* <Link to={"/clients"}> */}
                            <input type="submit" value="submit" />
                        {/* </Link> */}
                    </form> 

                </div>
        </div>
    )
}

export default AddClientForm