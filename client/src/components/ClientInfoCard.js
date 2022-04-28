import React from "react";

function ClientInfoCard({ showClient }) {
    return (
        <div className="client-info-card">
            <div>
                {showClient.first_name} {showClient.last_name}
            </div>
            <div>
                {showClient.phone_number} {showClient.email_address}
            </div>
            <div>
                client property = not working
            </div>
        </div>
    )
}

export default ClientInfoCard