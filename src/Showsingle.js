import React from 'react'

function Showsingle({state,confirmed,active,recovered,deaths}) {
    return (
        <div id="card">
            <h1 id="heading">{state} </h1>
            <h2> confirmed:{confirmed}</h2>
            <h2> active:{active}</h2>
            <h2> recovered:{recovered}</h2>
            <h2> deaths:{deaths}</h2>
        </div>
    )
}

export default Showsingle
