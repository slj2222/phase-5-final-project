import React from "react";

function TotalCollected({ totalInvoiced }) {
    return (
        <div className="total-collected">
            total $ invoiced: ${totalInvoiced}
        </div>
    )
}

export default TotalCollected