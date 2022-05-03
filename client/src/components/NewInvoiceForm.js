import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function NewInvoiceForm({ updateNewInvoiceList }) {
    const [invoiceDate, setInvoiceDate] = useState('')
    const [invoiceAmount, setInvoiceAmount] = useState('')
    const [propertyId, setPropertyId] = useState('')
    const [showClientProperties, setShowClientProperties] = useState([])
    const { id } = useParams()
    
    useEffect(() => {
        fetch(`/clients/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setShowClientProperties(data.properties)
            })
    }, [id])
    console.log(showClientProperties)

    function handleNewInvoice(e) {
        e.preventDefault()

        fetch("/invoices", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                invoice_date: invoiceDate, 
                invoice_amount: invoiceAmount, 
                client_id: id,
                property_id: propertyId,    
            })
        })
        .then(res => res.json())
        .then(data =>{
            updateNewInvoiceList(data)
            // console.log(data)
        })
    }
    
    const mapShowClientProperties = showClientProperties.map(property => {
        console.log(property.id)
        return (
            
            <option value={property.id}>{property.address}, {property.city}, {property.state}, {property.zip_code} </option>
        )
    })

    return (
        <div className={"new-invoice-container"}>
            NEW INVOICE FORM
            <form className="new-invoice-form" onSubmit={handleNewInvoice}>
                <input type="text" placeholder="invoice_date" onChange={(e) => setInvoiceDate(e.target.value)} />
                <input type="text" placeholder="invoice_amount" onChange={(e) => setInvoiceAmount(e.target.value)} />
                {/* <input type="text" placeholder="property_id" onChange={(e) => setPropertyId(e.target.value)} /> */}
                <div> property id:
                    <select name="choose property" value={propertyId} onChange={(e) => setPropertyId(parseInt(e.target.value))}>
                        Property id:
                        <option value="nil">choose a property</option>
                        {mapShowClientProperties}
                        {/* <option value="{showClientProperties[0].id}">{showClientProperties[0].address}  */}
                        {/* {showClientProperties[0].city}, {showClientProperties[0].state} {showClientProperties[0].zip_code} */}
                        {/* </option> */}
                        {/* <option value="2">{showClientProperties[1].address}, {showClientProperties[1].city}, {showClientProperties[1].state} {showClientProperties[1].zip_code}</option> */}
                        {/* <option value="3">{showClientProperties[2].address}, {showClientProperties[2].city}, {showClientProperties[2].state} {showClientProperties[2].zip_code}</option> */}
                        {/* <option value="4">{showClientProperties[3].address}, {showClientProperties[3].city}, {showClientProperties[3].state} {showClientProperties[3].zip_code}</option> */}
                        {/* <option value="5">{showClientProperties[4].address}, {showClientProperties[4].city}, {showClientProperties[4].state} {showClientProperties[4].zip_code}</option> */}

                    </select>
                </div>
                <input type="submit" value="submit" />
                
            </form>
        </div>
    )
}

export default NewInvoiceForm