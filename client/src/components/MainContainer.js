import React, { useEffect, useState } from "react"
import ClientListContainer from "./ClientListContainer"
import { Route } from "react-router-dom"
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

    return(
        <div className="main-container">
            <switch>
                <Route exact path="/client-list">
                    <ClientListContainer  clientList={clientList}/>
                </Route>
                <Route exact path="/invoice-list">
                    <InvoicesContainer />
                </Route>
                <Route exact path="/client-list/:id">
                    <DetailClientContainer />
                </Route>
                <Route exact path="/client/new">
                    <AddClientForm setClientList={setClientList}/>
                </Route>
            </switch>
        </div>
    )
}

export default MainContainer