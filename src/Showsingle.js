import React from 'react'

function Showsingle({state,confirmed,active,recovered,deaths}) {
    return (
        <div id="card">
            <h2 id="heading">{state} </h2>
            <h3> confirmed : {confirmed}</h3>
            <h3> active : {active}</h3>
            <h3> recovered : {recovered}</h3>
            <h3> deaths : {deaths}</h3>
        </div>
    )
}

export default Showsingle
