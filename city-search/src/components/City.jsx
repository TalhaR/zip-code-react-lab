import React from "react";

function City({ city, zipCodes }) {
    return (
        <div className="card">
            <div className="cardHeader">
                <h4> {city} </h4>
            </div>
            <div>
                <p style={{ marginTop: "3%", marginLeft: "3%" }}> Zipcodes: </p>
                <ul>
                    {zipCodes.map((zipCode) => (
                        <li> {zipCode} </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default City;
