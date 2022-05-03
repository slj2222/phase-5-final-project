import React from "react";

function PropertySimpleCard({ property }) {
    return (
        <div className="property-simple-card">
            <div>{property.address}</div>
            <div>{property.city}</div>
            <div>{property.state}</div>
            <div>{property.zip_code}</div>
        </div>
    )
}

export default PropertySimpleCard