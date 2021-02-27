import React from 'react'

function ZipSearchField({ zipChanged }) {
    return (
      <div className="row">
        <div className="col">
          <label>Zip Code: </label>
          <input type="text" onChange={zipChanged} />
        </div>
      </div>
    )
  }

export default ZipSearchField
