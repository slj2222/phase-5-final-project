import React, { useEffect, useState} from "react"
import InvoiceListContainer from "./InvoiceListContainer"
import TotalCollected from "./TotalCollected"

function InvoicesContainer({ clientList }) {
    const [totalInvoiced, setTotalInvoiced] = useState([])
    const [list, setList] = useState([])
    console.log(clientList)

    useEffect(() => {
        fetch("/total-invoiced")
            .then(res => res.json())
            .then(data => {
                setTotalInvoiced(data)
                
            })
    }, [])

    const mapClientList = clientList.map(client => {
        return (
            
            
            <InvoiceListContainer client={client}/>
        )
    })

    return (
        <div className="invoices-container">
            {mapClientList}
            {/* <InvoiceListContainer  invoiceList={invoiceList}/> */}
            <TotalCollected totalInvoiced={totalInvoiced}/>
        </div>
    )
}

export default InvoicesContainer