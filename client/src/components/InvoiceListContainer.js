import React from "react";
import InvoiceSimpleCard from "./InvoiceSimpleCard";

function InvoiceListContainer({ client }) {

console.log(client)
// const clientInvoice = client.invoice
// console.log(clientInvoice)
    const mapClientInvoices = client.invoices.map(invoice => {
        return (
            <InvoiceSimpleCard key={invoice.id} invoice={invoice} />
        )
    })

    // const mapInvoiceList = invoiceList.map(invoice => {
    //     return (
    //         <InvoiceSimpleCard key={invoice.id} invoice={invoice}/>
    //     )
    // })
    return (
        <div className="invoice-list-container">
            {/* {mapInvoiceList} */}
            {mapClientInvoices}
        </div>
    )
}

export default InvoiceListContainer