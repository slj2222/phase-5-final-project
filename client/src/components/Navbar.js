import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        
        <div className="navbar">
            <Link to={"/this-week"}>
                <div className="navbar-link">
                    this week = not working
                </div>
            </Link>
            <Link to={"/clients"}>
                <div className="navbar-link">
                    client list = not working
                </div>
            </Link>
            <Link to={"/invoice-list"}>
                <div className="navbar-link">
                    invoices = not working
                </div>
            </Link>
        </div>
    )
}


export default Navbar