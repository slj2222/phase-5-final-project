import React from "react";
import ClientInfoCard from "./ClientInfoCard";

function ClientContainer({ clientList }) {

    const clientListMap = clientList.map(client => {
        return (
            <ClientInfoCard key={client.id} client={client} />
        )
    })
    return (
        <div className="client-container">
            {clientListMap}
        </div>
    )
}

export default ClientContainer