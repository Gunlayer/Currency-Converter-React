
import React, {useEffect, useState} from 'react';
import Currensy from './Currensy.json';
import './App.css';


function App() {  
  let currencyArr = Currensy.exchangeRates;
  const [value, setvalue] = useState("");

  const [inputSelectState, setinputSelectState] = useState(currencyArr[0].code)
  const [outputSelectState, setoutputSelectState] = useState(currencyArr[0].code);
  
  const calcResult = () => {
    let result = value / getCurrentSelectedRate(inputSelectState) * getCurrentSelectedRate(outputSelectState);
    return result.toFixed(2);
  }
  const getCurrentSelectedRate = (selectData) => {
    let currentSelectedValue = currencyArr.filter(item => item.code == selectData);
    return currentSelectedValue[0].rate;
  }
  const swapCurrency = () => {
    
    currencyArr.splice(1,1);
    console.log (currencyArr);
      

  }
  
  
  

  return (
    <div className="container">
      <h1>Currency Converter</h1>
      <form>
        <select id="in" className="selector" onChange={event=>setinputSelectState(event.target.value)}>
          {Currensy.exchangeRates.map(item => (<option value={item.code} data-rate={item.rate}>{item.code}</option>))}  
        </select>
        <input type="text" maxLength="6" defaultValue="0" className="input-form" id="inputValue" onChange={event=>setvalue(event.target.value)}></input>

        <button className="btn" onClick={swapCurrency}>swap</button>

        <select id="out" className="selector" onChange={event => setoutputSelectState(event.target.value)}>
          {Currensy.exchangeRates.map(item => (<option value={item.code} data-rate={item.rate}>{item.code}</option>))}  
        </select>
        <input type="text" maxLength="6" value={calcResult()} className="input-form" id="outputValue" disabled></input>
      </form>
      
    </div>
  );
}

export default App;
