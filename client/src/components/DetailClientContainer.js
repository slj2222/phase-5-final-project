import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClientInfoCard from "./ClientInfoCard";
import InvoiceSimpleCard from "./InvoiceSimpleCard";

function DetailClientContainer() {
    const [showClient, setShowClient] = useState([])
    // const [showClientProperty, setShowClientProperty] = useState([])
  
    const [showClientInvoices, setShowClientInvoices] = useState([])
    
    const { id } = useParams()

    useEffect(() => {
        fetch(`/clients/${id}`)
            .then(res => res.json())
            .then(data => {
                
                setShowClient(data)
                setShowClientInvoices(data.invoices)
                
                
            })
    }, [id])
    

        const mapShowClientInvoices = showClientInvoices.map(invoice => {
            return (
                <InvoiceSimpleCard key={invoice.id} invoice={invoice} />
            )
        })
    

    return (
        <div className="detail-client-container">
            <ClientInfoCard showClient={showClient}/>
            {mapShowClientInvoices}
        </div>
    )
}

export default DetailClientContainer