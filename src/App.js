//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Result from './result';
const secretnumber = Math.floor(Math.random()*10+1)
function App() {
  const [term, setterm]= useState("")
  const handlechange = (e) => {
    setterm(e.target.value)
  }

  return (
    <div className="container">
      <div className="head"> 
        <label>
          guess the number between 1 to 10 answer:{secretnumber}
        </label>
      </div>
      <input id="term" type="text" name= "term" onChange={handlechange}></input>
      <Result secretnumber={secretnumber} term={term}/>
    </div>
  );
}

export default App;
