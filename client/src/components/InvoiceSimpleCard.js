import React from "react";

function InvoiceSimpleCard({ showClient, invoice }) {
    
    return (
        <div className="invoice-simple-card">
            <div>{invoice.invoice_date}</div>
            <div>property = needs info and link </div>
            <div>{invoice.invoice_amount}</div>
            <div>{invoice.days_since_invoiced}</div>
            <div>paid/outstanding?</div>
            <button>mark as paid</button>
        </div>
    )
}

export default InvoiceSimpleCard