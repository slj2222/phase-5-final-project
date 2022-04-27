import React from "react";

function ClientListCard({ client }) {
    return (
        <div className="client-list-card">
            <div className="client-name">
                <h5>{client.first_name} {client.last_name}</h5>
            </div>
            <div className="client-contact-information">
                <h5>{client.phone_number}</h5>
                <h5>{client.email_address}</h5>
            </div>
            

            <button className="button">Add to this week = not working</button>
            <button className="button"> Edit = not working</button>
            <button className="button">Remove client = not working</button>
        </div>
    )
}

export default ClientListCard