import React, { useEffect, useState} from "react"
import InvoiceListContainer from "./InvoiceListContainer"
import TotalCollected from "./TotalCollected"

function InvoicesContainer() {

    const [invoiceList, setInvoiceList] = useState([])


    useEffect(() => {
        fetch("/invoices")
            .then(res => res.json())
            .then(data => {
                
                // console.log(data)
                setInvoiceList(data)

            })
    }, [])
    
    return (
        <div className="invoices-container">
            <InvoiceListContainer  invoiceList={invoiceList}/>
            <TotalCollected />
        </div>
    )
}

export default InvoicesContainer