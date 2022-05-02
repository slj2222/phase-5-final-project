import React, { useEffect, useState } from "react"
import ClientListContainer from "./ClientListContainer"
import { Route, Switch } from "react-router-dom"
import InvoicesContainer from "./InvoicesContainer"
import DetailClientContainer from "./DetailClientContainer"
import AddClientForm from "./AddClientForm"



function MainContainer() {

    const [clientList, setClientList] = useState([])

    useEffect(() => {
        fetch("/clients")
            .then(res => res.json())
            .then(data => {
                
                // console.log(data)
                setClientList(data)
                
            })
    }, [])
    

    function updateNewClientList(newClient) {
        const updatedNewClientList = [...clientList, newClient]
        setClientList(updatedNewClientList)
    }

    function updateDeleteClientList(removedClient) {
        setClientList(clientList.filter(client => client !== removedClient))   
    }

    
    return(
        <div className="main-container">
            <Switch>
                <Route exact path="/client-list">
                    <ClientListContainer clientList={clientList} updateDeleteClientList={updateDeleteClientList}/>
                </Route>
                <Route exact path="/invoice-list">
                    <InvoicesContainer />
                </Route>
                <Route exact path="/client-list/:id">
                    <DetailClientContainer />
                </Route>
                <Route exact path="/client/new">
                    <AddClientForm updateNewClientList={updateNewClientList}/>
                </Route>
                
            </Switch>
        </div>
    )
}

export default MainContainer