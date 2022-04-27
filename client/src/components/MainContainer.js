import React, { useEffect, useState } from "react"
import ClientContainer from "./ClientContainer"



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
            <ClientContainer  clientList={clientList}/>
        </div>
    )
}







export default MainContainer