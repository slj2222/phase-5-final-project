import React from "react";
import { Link } from "react-router-dom";

function StartPage() {
    return (
        <div>
            START PAGE = signup / login
            <div>
                <Link to="/signup">
                    <button>Sign Up</button>
                </Link>
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
        </div>
    )
}

export default StartPage