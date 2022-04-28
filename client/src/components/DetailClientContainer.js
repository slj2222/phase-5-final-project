import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClientInfoCard from "./ClientInfoCard";

function DetailClientContainer() {
    const [showClient, setShowClient] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`/clients/${id}`)
            .then(res => res.json())
            .then(data => {
                
                console.log(data)
                setShowClient(data)
                
            })
    }, [id])

    return (
        <div className="detail-client-container">
            <ClientInfoCard showClient={showClient}/>
        </div>
    )
}

export default DetailClientContainer