import React from "react";
import { Link, useParams } from "react-router-dom"

function ClientInfoCard({ showClient }) {

    const { id } = useParams()
    return (
        <div className="client-info-card">
            <div>
                client id: {showClient.id}
            </div>
            <div>
                {showClient.first_name} {showClient.last_name}
            </div>
            <div>
                {showClient.phone_number} {showClient.email_address}
            </div>
            <Link to={`/clients/${id}`}>
                <button className="button" >edit = not working</button>
            </Link>
            <div>
                client property = not working
            </div>
        </div>
    )
}

export default ClientInfoCard