import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function EditClientForm() {
    const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [phoneNumber, setPhoneNumber] = useState('')
    // const [emailAddress, setEmailAddress] = useState('')
    const { id } = useParams()
    // console.log(id)
    // const [editedClient, setEditedClient] = useState([])
    // console.log(editedClient)


    function handleEditSubmit(e) {
        e.preventdefault()

        fetch(`/clients/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                first_name: firstName, 
                // last_name: lastName, 
                // phone_number: phoneNumber, 
                // email_address: emailAddress,
            })
        })
        .then(res => res.json())
        .then(data =>{
            // setEditedClient(data)
            // console.log(data)
        })
        
        
        
    }




    
    return (
        <div className="edit-client-container">
            <h3>edit new client</h3>
        
            <form className="edit-client-form" onSubmit={handleEditSubmit}>
                <input type="text" placeholder="first name" onChange={(e) => setFirstName(e.target.value)} />
                {/* <input type="text" placeholder="last name" onChange={(e) => setLastName(e.target.value)} />
                <input type="text" placeholder="phone number" onChange={(e) => setPhoneNumber(e.target.value)} />
                <input type="text" placeholder="email address" onChange={(e) => setEmailAddress(e.target.value)} /> */}
                {/* <input type="text" placeholder="address" onChange={(e) => setAddress(e.target.value)} />
                <input type="text" placeholder="city" onChange={(e) => setCity(e.target.value)} />
                <input type="text" placeholder="state" onChange={(e) => setState(e.target.value)} />
                <input type="text" placeholder="zip code" onChange={(e) => setZipCode(e.target.value)} /> */}
                {/* for some reason the LINK is messing up the POST */}
                {/* <Link to={"/client-list/:id"}> */}
                    <input type="submit" value="submit" />
                {/* </Link> */}
            </form> 

        </div>
    )
}

export default EditClientForm