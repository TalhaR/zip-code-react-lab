import React from "react";

function CitySearchField({ cityChanged }) {
    return (
        <div className="row">
            <div className="col">
                <label>City: </label>
                <input type="text" onChange={cityChanged} />
            </div>
        </div>
    );
}

export default CitySearchField;
