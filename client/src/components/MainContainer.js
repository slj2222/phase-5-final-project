import React, { useEffect, useState } from "react"
import ClientListContainer from "./ClientListContainer"
import { Route, Switch } from "react-router-dom"
import InvoicesContainer from "./InvoicesContainer"
import DetailClientContainer from "./DetailClientContainer"
import AddClientForm from "./AddClientForm"
import EditClientForm from "./EditClientForm"
import NewInvoiceForm from "./NewInvoiceForm"



function MainContainer() {
    const [invoiceList, setInvoiceList] = useState([])
    const [clientList, setClientList] = useState([])

    useEffect(() => {
        fetch("/clients")
            .then(res => res.json())
            .then(data => {
                
                // console.log(data)
                setClientList(data)
                
            })
    }, [])

    useEffect(() => {
        fetch("/invoices")
            .then(res => res.json())
            .then(data => {
                
                // console.log(data)
                setInvoiceList(data)

            })
    }, [])
    

    function updateNewClientList(newClient) {
        const updatedNewClientList = [...clientList, newClient]
        setClientList(updatedNewClientList)
    }

    function updateDeleteClientList(removedClient) {
        setClientList(clientList.filter(client => client !== removedClient))   
    }

    function updateNewInvoiceList(newInvoice) {
        const updatedNewInvoice = [...invoiceList, newInvoice]
        setInvoiceList(updatedNewInvoice)
    }
    
    // function updateEditedInvoiceList(paidInvoice) {
    //     const updated
    // }

    return(
        <div className="main-container">
            <Switch>
                <Route exact path="/client-list">
                    <ClientListContainer clientList={clientList} updateDeleteClientList={updateDeleteClientList}/>
                </Route>
                <Route exact path="/invoice-list">
                    <InvoicesContainer invoiceList={invoiceList} />
                </Route>
                <Route exact path="/client-list/:id">
                    <DetailClientContainer />
                </Route>
                <Route exact path="/client/new">
                    <AddClientForm updateNewClientList={updateNewClientList}/>
                </Route>
                <Route exact path ="/clients/:id">
                    <EditClientForm />
                </Route>
                <Route exact path ="/clients/:id/invoice/new">
                    <NewInvoiceForm updateNewInvoiceList={updateNewInvoiceList}/>
                </Route>
            </Switch>
        </div>
    )
}

export default MainContainer