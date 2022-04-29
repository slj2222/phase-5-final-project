import React, { useState } from "react";


function AddClientForm() {
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
            // if(data.errors){
            //     setErrors(data.errors)
            // }
            // else{
            //     history.push(`/albums/${albumID}`)
            // }
            console.log(data)
        })
    }



    return (
        <div className="add-client-container">
            <h3>add new client</h3>

            <form className="add-client-form" onClick={handleSubmit}>
                <input type="text" placeholder="first name" onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" placeholder="last name" onChange={(e) => setLastName(e.target.value)} />
                <input type="text" placeholder="phone number" onChange={(e) => setPhoneNumber(e.target.value)} />
                <input type="text" placeholder="email address" onChange={(e) => setEmailAddress(e.target.value)} />
                {/* <input type="text" placeholder="address" onChange={(e) => setAddress(e.target.value)} />
                <input type="text" placeholder="city" onChange={(e) => setCity(e.target.value)} />
                <input type="text" placeholder="state" onChange={(e) => setState(e.target.value)} />
                <input type="text" placeholder="zip code" onChange={(e) => setZipCode(e.target.value)} /> */}
                <input type="submit" />
            </form> 

        </div>
    )
}

export default AddClientForm