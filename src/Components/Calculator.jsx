import React from "react";
import './Calculator.css';
import { useState } from "react";

function Calculator() {

  const buttons = [
    { value: '7', type: 'number' },
    { value: '8', type: 'number' },
    { value: '9', type: 'number' },
    { value: '*', type: 'operator' },
    { value: '4', type: 'number' },
    { value: '5', type: 'number' },
    { value: '6', type: 'number' },
    { value: '-', type: 'operator' },
    { value: '1', type: 'number' },
    { value: '2', type: 'number' },
    { value: '3', type: 'number' },
    { value: '+', type: 'operator' },
    { value: '0', type: 'number' },
    { value: '.', type: 'dot' },
    { value: '/', type: 'operator' }
  ];

  const [result, setResult] = useState('');
  const [isCalculated, updateisCalculated] = useState(false);

  const btnClick = (e, type) => {
    animateButton(e);
    if(isCalculated && type === 'number'){
      clear();
      setResult(e.target.value);
    } else {
      setResult(prevResult => prevResult.concat(e.target.value));
    }
    updateisCalculated(false);
  };

  const clear = () => {
    updateisCalculated(false);
    setResult('');
  }

  const undo = () => {
    updateisCalculated(false);
    setResult(result.slice(0, -1));
  }

  const calculate = () => {
    updateisCalculated(true);
    if(result === ''){
      return;
    }
    try {
      const evalResult = eval(result);
      setResult(evalResult.toString());
    } catch (error) {
      updateisCalculated(false);
      setResult('Formula non valida');
      setTimeout(() => {
        clear();
      }, 1500);
    }
  }

  const animateButton = (e) => {
    e.target.classList.add('clicked');
    setTimeout(() => {
      e.target.classList.remove('clicked');
    }, 100);
  }

  return (
    <>
      <h1 className="text-center my-5">Calcolatrice</h1>
      <div className="calculator d-flex flex-wrap">

        {/* risultato */}
        <input className={result === 'Formula non valida' ? 'text-center fs-4' : 'text-end'} type="text" placeholder="0" id="answer" value={result} readOnly/>

        {/* bottoni numeri e operatori */}
        {buttons.map((button, index) => (
          <input
            disabled={result === 'Formula non valida'}
            key={index}
            type="button"
            value={button.value}
            className={`button ${button.value === '0' ? 'button0' : ''}`}
            onClick={(e) => {btnClick(e, button.type)}}
          />
        ))}
        
        <input type="button" value='<-' className="button" onClick={() => {animateButton(event); undo();}} disabled={result === 'Formula non valida'} />
        <input type="button" value="C" className="button" onClick={() => {animateButton(event); clear();}} />
        <input type="button" value="=" className="button" onClick={() => {animateButton(event); calculate();}} />

      </div>
    </>
  );
}

export default Calculator