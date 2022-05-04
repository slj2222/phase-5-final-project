import React from "react";
import { Link, useParams } from "react-router-dom";


function ClientListCard({ client, updateDeleteClientList }) {
    // const useHistory = useHistory()
    const { id } = useParams()



    function handleDelete() {
    fetch(`/clients/${client.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'}
        })
        // .catch(error => console.log(error))
        // console.log(client)
        updateDeleteClientList(client)
    }



    return (
        <div className="client-list-card">
            <div className="client-name">
                <Link to={`/clients/${client.id}`}>
                    
                    <h5>{client.first_name} {client.last_name}</h5>
                    <h3>client id: {client.id}</h3>
                </Link>
            </div>
            {/* <div className="client-contact-information">
                <h5>{client.phone_number}</h5>
                <h5>{client.email_address}</h5>
            </div> */}
            <div className="client-property-information">
                <h5>
                    client property = not working
                </h5>
            </div>
            
           
            <button className="button">add to this week = not working</button>
            {/* <Link to={`/clients/${id}`}>
                <button className="button">edit = not working</button>
            </Link> */}
            <button className="button" onClick={handleDelete}>remove client</button>
        </div>
    )
}

export default ClientListCard