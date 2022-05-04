import React from "react"
import { Link } from "react-router-dom"

function Navbar({ onLogout, currentCompany}) {


        function handleLogout() {
            fetch("/logout", {
                method: "DELETE",
            }).then(() => {
                onLogout();
                // history.push('/')
            });
        }
    
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
            <Link to={"/invoices"}>
                <div className="navbar-link">
                    invoices = not working
                </div>
            </Link>
            <div>
                {currentCompany ? <></> : 
                    <Link to={"/"}>
                        <button onClick={handleLogout}>Log Out</button>
                    </Link>
                }
            </div>
            
        </div>
    )
}


export default Navbar