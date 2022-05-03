import React, { useState } from "react";
import { useParams } from "react-router-dom";

function AddPropertyForm({ updateClientNewProperty }) {
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [amountCharged, setAmountCharged] = useState('')
    const {id} = useParams()

    function handleSubmit(e) {
        e.preventDefault()
        console.log(id)
        fetch(`/properties`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                client_id: id, 
                address: address, 
                city: city, 
                state: state, 
                zip_code: zipCode,
                amount_charged: amountCharged,
            })
        })
        .then(res => res.json())
        .then(data => 
            // console.log(data))
            updateClientNewProperty(data))
    }




    return (
        <div>
            <div>
                <h2>add client's property</h2>
            
                <form className="add-property-form" onSubmit={handleSubmit}>
                    
                    <input type="text" placeholder="address" onChange={(e) => setAddress(e.target.value)} />
                    <input type="text" placeholder="city" onChange={(e) => setCity(e.target.value)} />
                    <input type="text" placeholder="state" onChange={(e) => setState(e.target.value)} />
                    <input type="text" placeholder="zip code" onChange={(e) => setZipCode(e.target.value)} />
                    <input type="text" placeholder="amount charged" onChange={(e) => setAmountCharged(e.target.value)} />

                    {/* for some reason the LINK is messing up the POST */}
                    {/* <Link to={"/client-list"}> */}
                        <input type="submit" value="submit" />
                    {/* </Link> */}
                </form> 

            </div>
        </div>
        
    )
}

export default AddPropertyForm