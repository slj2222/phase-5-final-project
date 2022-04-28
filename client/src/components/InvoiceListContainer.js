import React from "react";
import InvoiceSimpleCard from "./InvoiceSimpleCard";

function InvoiceListContainer({ invoiceList}) {

    const mapInvoiceList = invoiceList.map(invoice => {
        return (
            <InvoiceSimpleCard key={invoice.id} invoice={invoice}/>
        )
    })
    return (
        <div className="invoice-list-container">
            {mapInvoiceList}
        </div>
    )
}

export default InvoiceListContainer