import React from "react";
import ClientListCard from "./ClientListCard";

function ClientListContainer({ clientList }) {

    const clientListMap = clientList.map(client => {
        return (
            <ClientListCard key={client.id} client={client} />
        )
    })
    return (
        <div className="client-list-container">
            {clientListMap}
        </div>
    )
}

export default ClientListContainer