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
import Login from "./Login"


function MainContainer({ currentCompany }) {
    // const [currentCompany, setCurrentCompany] = useState('')
    const [invoiceList, setInvoiceList] = useState([])
    const [clientList, setClientList] = useState([])
    const [showClientProperties, setShowClientProperties] = useState([])

    // useEffect(()=>{
    //     fetch('/auth')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setCurrentCompany(data)
    //     })
    // }, []) 
            // {
        //   console.log(res.json())
        //   if(res.ok){
            // res.json().then(user => setCurrentCompany(user))
        //   }
        // })
    //   }, [])

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
                        currentCompany={currentCompany}
                    />
                </Route>
                <Route exact path="/invoice-list">
                    <InvoicesContainer 
                        invoiceList={invoiceList}
                        currentCompany={currentCompany} 
                    />
                </Route>
                <Route exact path="/clients/:id">
                    <DetailClientContainer 
                        invoiceList={invoiceList} 
                        // showClientProperties={showClientProperties} 
                        // setShowClientProperties={setShowClientProperties}  
                        currentCompany={currentCompany}
                    />
                </Route>
                <Route exact path="/client/new">
                    <AddClientForm 
                        updateNewClientList={updateNewClientList}
                        currentCompany={currentCompany}
                    />
                </Route>
                <Route exact path ="/clients/:id">
                    <EditClientForm currentCompany={currentCompany}/>
                </Route>
                <Route exact path ="/clients/:id/invoice/new">
                    <NewInvoiceForm 
                        updateNewInvoiceList={updateNewInvoiceList}
                        currentCompany={currentCompany}
                    />
                </Route>
                <Route exact path ="/clients/:id/properties/new">
                    <AddPropertyForm 
                    updateClientNewProperty={updateClientNewProperty} 
                    currentCompany={currentCompany}
                    />
                </Route>
               
            </Switch>
        </div>
    )
}

export default MainContainer