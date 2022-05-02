import React, { useState } from "react";

function NewInvoiceForm({ updateNewInvoiceList }) {
    const [invoiceDate, setInvoiceDate] = useState('')
    const [invoiceAmount, setInvoiceAmount] = useState('')

    

    function handleNewInvoice(e) {
        e.preventDefault()

        fetch("/invoices", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                invoice_date: invoiceDate, 
                invoice_amount: invoiceAmount, 
                // client_id: ???????
                // property_id: ??????? 
            })
        })
        .then(res => res.json())
        .then(data =>{
            updateNewInvoiceList(data)
            console.log(data)
        })
    }
    


    return (
        <div className={"new-invoice-container"}>
            NEW INVOICE FORM
            <form className="new-invoice-form" onSubmit={handleNewInvoice}>
                <input type="text" placeholder="invoice_date" onChange={(e) => setInvoiceDate(e.target.value)} />
                <input type="text" placeholder="invoice_amount" onChange={(e) => setInvoiceAmount(e.target.value)} />
                {/* <input type="text" placeholder="client???????" onChange={(e) => (e.target.value)} />
                <input type="text" placeholder="property???????" onChange={(e) => (e.target.value)} /> */}
                <input type="submit" value="create invoice" />
                
            </form>
        </div>
    )
}

export default NewInvoiceForm