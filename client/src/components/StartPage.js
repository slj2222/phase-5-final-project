import React from "react";
import { Link } from "react-router-dom";
import MainContainer from "./MainContainer";

function StartPage({ currentCompany }) {
    return (
        <div>
            START PAGE = signup / login
            <div>

                {currentCompany ?
                    <MainContainer />
                    :
                    <div>
                        <Link to="/signup">
                            <button>Sign Up</button>
                        </Link>
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                    </div>
                }

            </div>
        </div>
    )
}

export default StartPage