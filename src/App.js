
import React, { useState } from 'react';
import Currensy from './Currensy.json';
import './App.css';
import CurrensyList from './components/CurrensyList';


function App() {
  const currencyArr = Currensy.exchangeRates;
  const [value, setvalue] = useState("");

  const [inputSelectState, setinputSelectState] = useState(currencyArr[0].code)
  const [outputSelectState, setoutputSelectState] = useState(currencyArr[0].code);

  const calcResult = () => {
    let result = value / getCurrentSelectedRate(inputSelectState) * getCurrentSelectedRate(outputSelectState);
    return Number.isInteger(result) ? result : result.toFixed(2);
  }
  const getCurrentSelectedRate = (selectData) => {
    let currentSelectedValue = currencyArr.filter(item => item.code == selectData);    
    return currentSelectedValue[0].rate;
  }
  const swapCurrency = () => {
    setoutputSelectState(inputSelectState);
    setinputSelectState(outputSelectState);
  }

  return (
    <div className="container">
      <h1>Currency Converter</h1>
      <div className="input-box">
        <form>
          <CurrensyList state={inputSelectState} setState={setinputSelectState} arr={currencyArr} />
          <input type="text" maxLength="6" defaultValue="0" className="input-form" id="inputValue" onChange={event => setvalue(event.target.value)}></input>
        </form>
      </div>

      <button className="btn" onClick={swapCurrency}>swap</button>
      <div className="input-box">
        <form>
          <CurrensyList state={outputSelectState} setState={setoutputSelectState} arr={currencyArr} />
          <input type="text" maxLength="6" value={calcResult()} className="input-form" id="outputValue" disabled></input>
        </form>
      </div>
    </div>
  );
}

export default App;
