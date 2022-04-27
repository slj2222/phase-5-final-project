import React, { useEffect, useState } from "react"
import ClientContainer from "./ClientContainer"
import { Route } from "react-router-dom"



function MainContainer() {

    const [clientList, setClientList] = useState([])

    useEffect(() => {
        fetch("/clients")
            .then(res => res.json())
            .then(data => {
                
                console.log(data)
                setClientList(data)

            })
    }, [])


    return(
        <div className="main-container">
            <switch>
                <Route exact path="/client-list">
                    <ClientContainer  clientList={clientList}/>
                </Route>
            </switch>
        </div>
    )
}







export default MainContainer