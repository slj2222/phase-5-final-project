import React, { useEffect, useState } from "react"
import ClientListContainer from "./ClientListContainer"
import { Route, Switch } from "react-router-dom"
import InvoicesContainer from "./InvoicesContainer"
import DetailClientContainer from "./DetailClientContainer"
import AddClientForm from "./AddClientForm"
import EditClientForm from "./EditClientForm"
import NewInvoiceForm from "./NewInvoiceForm"
import AddPropertyForm from "./AddPropertyForm"
import SignUp from "./SignUp"



function MainContainer() {
    const [currentCompany, setCurrentCompany] = useState('')
    const [invoiceList, setInvoiceList] = useState([])
    const [clientList, setClientList] = useState([])
    const [showClientProperties, setShowClientProperties] = useState([])

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
                
                console.log(data)
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


    function updateClientNewProperty(newProperty) {
        const newClientProperties = [...showClientProperties, newProperty]
        setShowClientProperties(newClientProperties)
        console.log(newClientProperties)
        console.log(showClientProperties)
    }
    
    

    return(
        <div className="main-container">
            <Switch>
                <Route exact path="/clients">
                    <ClientListContainer 
                        clientList={clientList} 
                        updateDeleteClientList={updateDeleteClientList}
                    />
                </Route>
                <Route exact path="/invoice-list">
                    <InvoicesContainer 
                        invoiceList={invoiceList} 
                    />
                </Route>
                <Route exact path="/clients/:id">
                    <DetailClientContainer 
                    invoiceList={invoiceList} 
                        // showClientProperties={showClientProperties} 
                        // setShowClientProperties={setShowClientProperties}  
                    />
                </Route>
                <Route exact path="/client/new">
                    <AddClientForm 
                        updateNewClientList={updateNewClientList}
                    />
                </Route>
                <Route exact path ="/clients/:id">
                    <EditClientForm />
                </Route>
                <Route exact path ="/clients/:id/invoice/new">
                    <NewInvoiceForm 
                        updateNewInvoiceList={updateNewInvoiceList}
                    />
                </Route>
                <Route exact path ="/clients/:id/properties/new">
                    <AddPropertyForm 
                    updateClientNewProperty={updateClientNewProperty} 
                    />
                </Route>
                <Route exact path ="/signup">
                    <SignUp setCurrentCompany={setCurrentCompany}/>
                </Route>
            </Switch>
        </div>
    )
}

export default MainContainer