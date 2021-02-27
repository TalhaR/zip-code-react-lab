import React from 'react'

function City({ City, State, Lat, Long, EstimatedPopulation, TotalWages }) {
    return (
      <div className="card">
        <div className="cardHeader">
          <h2> {`${City}, ${State}`} </h2>
        </div>
        <div>
          <ul>
            <li> {`State: ${State}`}</li>
            <li> {`Location: (${Lat}, ${Long})`}</li>
            <li> {`Population (estiminated): ${EstimatedPopulation}`}</li>
            <li> {`Total Wages: ${TotalWages}`}</li>
          </ul>
        </div>
      </div>
    );
}

export default City

