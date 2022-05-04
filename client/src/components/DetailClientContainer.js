import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ClientInfoCard from "./ClientInfoCard";
import InvoiceSimpleCard from "./InvoiceSimpleCard";
import PropertySimpleCard from "./PropertySimpleCard";

function DetailClientContainer({ }) {
    const [showClient, setShowClient] = useState([])
    // const [showClientProperty, setShowClientProperty] = useState([])
    const [showClientInvoices, setShowClientInvoices] = useState([])
    const [showClientProperties, setShowClientProperties] = useState([])
    // console.log(showClientProperties)
    const { id } = useParams()
    

    useEffect(() => {
        fetch(`/clients/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setShowClient(data)
                setShowClientInvoices(data.invoices)
                setShowClientProperties(data.properties)
            })
    }, [id])


    // function updateClientNewProperty(newProperty) {
    //     const newClientProperties = [...showClientProperties, newProperty]
    //     setShowClientProperties(newClientProperties)
    // }

    
    

    const mapShowClientInvoices = showClientInvoices.map(invoice => {
        return (
            <InvoiceSimpleCard key={invoice.id} invoice={invoice} />
        )
    })

    const mapClientProperties = showClientProperties.map(property => {
        return (    
            <PropertySimpleCard key={ property.id} property={property} />
        )
    })
    

    return (
        <div className="detail-client-container">
            <ClientInfoCard showClient={showClient}/>
            {mapClientProperties}
            <Link to={`/clients/${id}/invoice/new`}>
                <button>add an invoice</button>
            </Link>
            <Link to={`/clients/${id}/properties/new`}>
                <button>add a property</button>
            </Link>

            <div>
            {mapShowClientInvoices}
            </div>
        </div>
    )
}

export default DetailClientContainer