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
  const [isCalculated, setIsCalculated] = useState(false);

  const btnClick = (e, type) => {
    animateButton(e);

    if (isCalculated && type === 'number') {
      clear();
      setResult(e.target.value);
    } else {
      setResult(prev => prev + e.target.value);
    }

    setIsCalculated(false);
  };

  const clear = () => {
    setResult('');
    setIsCalculated(false);
  };

  const undo = () => {
    setResult(prev => prev.slice(0, -1));
    setIsCalculated(false);
  };

  const calculate = () => {
    setIsCalculated(true);

    if (result === '') return;

    try {
      const evalResult = eval(result);
      setResult(evalResult.toString());
    }
    catch {
      setIsCalculated(false);
      setResult('Formula non valida');

      setTimeout(() => {
        clear();
      }, 1500);
    }
  };

  const animateButton = (e) => {
    e.target.classList.add('clicked');

    setTimeout(() => {
      e.target.classList.remove('clicked');
    }, 100);
  };

  return (

    <div className="calculator d-flex flex-wrap my-5">

      <input
        id="answer"
        type="text"
        placeholder="0"
        value={result}
        readOnly
        className={result === 'Formula non valida' ? 'text-center fs-4' : 'text-end'}
      />

      {buttons.map((button, index) => (
        <input
          key={index}
          type="button"
          value={button.value}
          disabled={result === 'Formula non valida'}
          className={`button ${button.value === '0' ? 'button0' : ''}`}
          onClick={(e) => btnClick(e, button.type)}
        />
      ))}

      <input
        type="button"
        value="<-"
        className="button"
        onClick={(e) => { animateButton(e); undo(); }}
        disabled={result === 'Formula non valida'}
      />

      <input
        type="button"
        value="C"
        className="button"
        onClick={(e) => { animateButton(e); clear(); }}
      />

      <input
        type="button"
        value="="
        className="button equal"
        onClick={(e) => { animateButton(e); calculate(); }}
      />

    </div>

  );
}

export default Calculator;