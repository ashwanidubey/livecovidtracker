import React from 'react'

function Myform({states , setselectedstates}) {
    return (
        <div id="myform">
            <h1>Select State</h1>
            <select id="myselect" onChange={(e)=>{console.log("uff",e.target.value);setselectedstates(e.target.value)}}>
            {
                    states.map((state)=><option value={state} onSelect={()=>{console.log(state,"uff"); setselectedstates(state)}} onClick={()=>{console.log(state,"uff"); setselectedstates(state)}}>{state}</option>)
            }
            </select>
        </div>
    )
}

export default Myform
