import React from 'react'
// import City from './City'
// 
function Output({locations}) {
    return (
        <div>
            {/* {locations.map((location) => <City {...location} />)} */}
            {JSON.stringify(locations)}
        </div>
    )
}

export default Output
