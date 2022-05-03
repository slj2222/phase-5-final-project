import React, { useState } from "react";
import { useParams } from "react-router-dom";

function NewInvoiceForm({ updateNewInvoiceList }) {
    const [invoiceDate, setInvoiceDate] = useState('')
    const [invoiceAmount, setInvoiceAmount] = useState('')
    const [propertyId, setPropertyId] = useState('')
    const { id } = useParams()
    

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
    


    return (
        <div className={"new-invoice-container"}>
            NEW INVOICE FORM
            <form className="new-invoice-form" onSubmit={handleNewInvoice}>
                <input type="text" placeholder="invoice_date" onChange={(e) => setInvoiceDate(e.target.value)} />
                <input type="text" placeholder="invoice_amount" onChange={(e) => setInvoiceAmount(e.target.value)} />
                <input type="text" placeholder="property_id" onChange={(e) => setPropertyId(e.target.value)} />
                <input type="submit" value="submit" />
                
            </form>
        </div>
    )
}

export default NewInvoiceForm