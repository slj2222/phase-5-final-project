import React, { useEffect, useState} from "react"
import InvoiceListContainer from "./InvoiceListContainer"
import TotalCollected from "./TotalCollected"

function InvoicesContainer({ invoiceList }) {

   
    
    return (
        <div className="invoices-container">
            <InvoiceListContainer  invoiceList={invoiceList}/>
            <TotalCollected />
        </div>
    )
}

export default InvoicesContainer