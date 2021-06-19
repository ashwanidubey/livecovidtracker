import { useState,useEffect } from 'react';
import './App.css';
import { Covid } from './Covid';

function App() {
  const[val,changeval]=useState(localStorage.getItem("myval"))
  //const[count,changecount]=useState(0)
  
  return (
    <>
    
      <input  defaultValue={val} onChange={(e)=>{localStorage.setItem("myval",e.target.value);changeval(localStorage.getItem("myval"))}}></input>
      
    </>
  );
}

export default App;
