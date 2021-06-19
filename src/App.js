import { useState,useEffect } from 'react';
import './App.css';
import { Covid } from './Covid';

function App() {
  const[val,changeval]=useState("hi")
  const[count,changecount]=useState(0)
  useEffect(() => {
    changeval(localStorage.getItem("myval"))
  }, [count])
  return (
    <>
      <h1>{val}</h1>
      <input onChange={(e)=>{console.log("hello");localStorage.setItem("myval",e.target.value);changecount(count+1)}}></input>
      <Covid /> 
    </>
  );
}

export default App;
