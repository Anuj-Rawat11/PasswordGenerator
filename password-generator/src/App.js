// import logo from './logo.svg';
import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [rangevalue, setrangevalue] = useState(10);
  const [numcheck, setnumcheck] = useState(false);
  const [charcheck, setcharcheck] = useState(false);
  const [password, setpassword] = useState("");

  const generatePassword = useCallback(() => {
    const char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num = "1234567890";
    const spechar = "@#$%^&*(){}[]~";
    let temp = "";
    let tempPass = "";

    temp = temp + char;
    if (numcheck) temp = temp + num;
    if (charcheck) temp = temp + spechar;
    for (let i = 1; i <= rangevalue; i++) {
      tempPass = tempPass + temp[Math.floor(Math.random() * temp.length)];
    }

    setpassword(tempPass);
  }, [rangevalue, charcheck, numcheck]);

  useEffect(() => {
    generatePassword();
  }, [rangevalue, charcheck, numcheck]);

  return (
    <div className="App">
      <div className="passapp">
        <h1>Password :- {password}</h1>
        <label>Select Length : </label>
        <input
          type="range"
          min="5"
          max="30"
          value={rangevalue}
          onChange={(e) => setrangevalue(e.target.value)}
        />
        <span>{rangevalue}</span>
        <input
          id="num"
          type="checkbox"
          defaultValue={numcheck}
          onChange={(e) => setnumcheck(!numcheck)}
        />
        <label htmlFor="num">Number</label>
        <input
          id="char"
          type="checkbox"
          defaultValue={charcheck}
          onChange={(e) => setcharcheck(!charcheck)}
        />
        <label htmlFor="char">Special characters</label>
      </div>
    </div>
  );
}

export default App;
