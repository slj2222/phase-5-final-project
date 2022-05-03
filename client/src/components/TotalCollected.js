import React from "react";

function TotalCollected({ totalCollected }) {
    return (
        <div className="total-collected">
            total $ collected: ${totalCollected}
        </div>
    )
}

export default TotalCollected