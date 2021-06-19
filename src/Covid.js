import React,{useEffect,useState} from 'react'
import Showsingle from './Showsingle'
import Myform from './Myform'
import './Myfile.css'
export const Covid = () => {
    const [mydata, setmydata] = useState([])
    const [allstates, setallstates] = useState([])
    const [selectedstates, setselectedstates] = useState("")
    
    const getCovidData=async()=>{
        let res=await fetch('https://api.covid19india.org/data.json').then((res)=>res.json()).then((actualdata)=>actualdata.statewise)
       
       setmydata(res)
        
    }
    
    useEffect(() => {
        console.log("state",selectedstates)
        getCovidData();   
        console.log(mydata[0])
        let all=mydata.map((data)=>data.state)
        all=all.filter((st)=>{
         if(st==="State Unassigned" || st==="Total")
           return false
         return true  
          })
        //console.log(allstates) 
        setallstates(all)
        
    }, [])
    return (
        <>
            <div id="header">
            <h1>&#128308; Live</h1>
            <h2>COVID-19 Coronavirus Update</h2>
            </div>
            <Myform states={allstates} setselectedstates={setselectedstates}/>
            <div id="mycontainer">
            <div id="mycountry">
            {mydata.length && <Showsingle state={"INDIA"} confirmed={mydata[0].confirmed} active={mydata[0].active} recovered={mydata[0].recovered} deaths={mydata[0].deaths}/>}
            </div>
            <div id="mystate">
            {selectedstates!=""?
            
            <Showsingle state={mydata.filter((data)=>data.state==selectedstates)[0].state} confirmed={ mydata.filter((data)=>data.state==selectedstates)[0].confirmed} active={ mydata.filter((data)=>data.state==selectedstates)[0].active} recovered={ mydata.filter((data)=>data.state==selectedstates)[0].recovered} deaths={ mydata.filter((data)=>data.state==selectedstates)[0].deaths}/>
           :<h1>no state selected</h1>}
            </div>
            
            </div>
           
           
            
            
        </>
    )
}
