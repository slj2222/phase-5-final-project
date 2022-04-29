import React from "react";

function AddClientForm() {
    return (
        <div className="add-client-container">
            <h3>add new client</h3>

            <form className="add-client-form">
                <input type="text" placeholder="first name" />
                <input type="text" placeholder="last name" />
                <input type="text" placeholder="phone number" />
                <input type="text" placeholder="email address" />
                <input type="text" placeholder="address" />
                <input type="text" placeholder="city" />
                <input type="text" placeholder="state" />
                <input type="text" placeholder="zip code" />
                <input type="submit" />
            </form> 

        </div>
    )
}

export default AddClientForm