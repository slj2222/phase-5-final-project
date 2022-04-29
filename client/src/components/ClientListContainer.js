import React from "react";
import ClientListCard from "./ClientListCard";
import { Link } from "react-router-dom";

function ClientListContainer({ clientList, updateDeleteClientList }) {

    const clientListMap = clientList.map(client => {
        return (
            <ClientListCard key={client.id} client={client} updateDeleteClientList={updateDeleteClientList}/>
        )
    })
    return (
        <div className="client-list-container">
            <div className="new-client-button">
                <Link to="/client/new">
                    <button className="new-client-button">add new client</button>
                </Link>
            </div>
            {clientListMap}
        </div>
    )
}

export default ClientListContainer