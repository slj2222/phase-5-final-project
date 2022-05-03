import React, { useEffect, useState} from "react"
import InvoiceListContainer from "./InvoiceListContainer"
import TotalCollected from "./TotalCollected"

function InvoicesContainer({ invoiceList }) {
    const [totalInvoiced, setTotalInvoiced] = useState([])

    useEffect(() => {
        fetch("/total-invoiced")
            .then(res => res.json())
            .then(data => {
                setTotalInvoiced(data)
                
            })
    }, [])

    
    return (
        <div className="invoices-container">
            <InvoiceListContainer  invoiceList={invoiceList}/>
            <TotalCollected totalInvoiced={totalInvoiced}/>
        </div>
    )
}

export default InvoicesContainer