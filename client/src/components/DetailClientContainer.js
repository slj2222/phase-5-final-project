import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClientInfoCard from "./ClientInfoCard";
import InvoiceSimpleCard from "./InvoiceSimpleCard";

function DetailClientContainer() {
    const [showClient, setShowClient] = useState([])
    // console.log(showClient)
    // console.log(showClient.invoices)
    

    // const [showClientProperty, setShowClientProperty] = useState([])
    const [showClientInvoices, setShowClientInvoices] = useState([])
    const { id } = useParams()
    // console.log(useParams())

    useEffect(() => {
        fetch(`/clients/${id}`)
            .then(res => res.json())
            .then(data => {
                // const mapShowClientInvoices = data.invoices.map(invoice => {
                //     return (
                //         <InvoiceSimpleCard key={invoice.id} invoice={invoice} />
                //     )
                // })
                // console.log(data)
                setShowClient(data)
                setShowClientInvoices(data.invoices)
                console.log(data.invoices)
            
                
            })
    }, [id])


    // let  mapShowClientInvoices = false

    // if (showClient.length) {
        const mapShowClientInvoices = showClientInvoices.map(invoice => {
            return (
                <InvoiceSimpleCard key={invoice.id} invoice={invoice} />
            )
        })
    // }  

    return (
        <div className="detail-client-container">
            <ClientInfoCard showClient={showClient}/>
            {mapShowClientInvoices}
        </div>
    )
}

export default DetailClientContainer