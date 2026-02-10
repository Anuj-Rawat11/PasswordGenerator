// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
const [rangevalue,setrangevalue]=useState(10);
const [numcheck,setnumcheck]=useState(false);
const [charcheck,setcharcheck]=useState(false);
  return (
    <div className="App">
      <div className="passapp">
        <h1>Password:</h1>
        <label>Select Length : </label>
        <input type="range" min="5" max="30" value={rangevalue} onChange={(e)=>setrangevalue(e.target.value)} />
        <span>{rangevalue}</span>
        <input id="num" type="checkbox" defaultValue={numcheck} onChange={(e)=>setnumcheck(e.target.value)}/>
        <label htmlFor="num">Number</label>
        <input  id="char" type="checkbox" defaultValue={charcheck} onChange={(e)=>setcharcheck(e.target.value)} />
        <label htmlFor="char">Special characters</label>
      </div>
    </div>
  );
}

export default App;
