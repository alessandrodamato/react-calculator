import './Calculator.css';
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

function tokenize(input) {
  const tokens = [];

  let index = 0;

  while (index < input.length) {
    const char = input[index];

    if (char === '+' || char === '-' || char === '*' || char === '/') {
      tokens.push({ type: 'operator', value: char });
      index += 1;
      continue;
    }

    if (char === '.' || (char >= '0' && char <= '9')) {
      const start = index;
      let dots = 0;

      while (index < input.length && (input[index] === '.' || (input[index] >= '0' && input[index] <= '9'))) {
        if (input[index] === '.') {
          dots += 1;
          if (dots > 1) throw new Error('Numero non valido');
        }
        index += 1;
      }

      const raw = input.slice(start, index);
      if (raw === '.') throw new Error('Numero non valido');

      tokens.push({ type: 'number', value: Number(raw) });
      continue;
    }

    throw new Error('Carattere non valido');
  }

  return tokens;
}

function evaluateExpression(expression) {
  const tokens = tokenize(expression);

  if (tokens.length === 0) throw new Error('Espressione vuota');

  let position = 0;

  const peek = () => tokens[position];

  const parseFactor = () => {
    const token = peek();

    if (!token) throw new Error('Operando mancante');

    if (token.type === 'operator' && (token.value === '-' || token.value === '+')) {
      position += 1;
      const value = parseFactor();
      return token.value === '-' ? -value : value;
    }

    if (token.type !== 'number') throw new Error('Operando non valido');

    position += 1;
    return token.value;
  };

  const parseTerm = () => {
    let value = parseFactor();

    while (peek()?.type === 'operator' && (peek().value === '*' || peek().value === '/')) {
      const operator = peek().value;
      position += 1;
      const right = parseFactor();

      if (operator === '/' && right === 0) throw new Error('Divisione per zero');

      value = operator === '*' ? value * right : value / right;
    }

    return value;
  };

  const parseExpression = () => {
    let value = parseTerm();

    while (peek()?.type === 'operator' && (peek().value === '+' || peek().value === '-')) {
      const operator = peek().value;
      position += 1;
      const right = parseTerm();
      value = operator === '+' ? value + right : value - right;
    }

    return value;
  };

  const value = parseExpression();

  if (position !== tokens.length) throw new Error('Espressione non valida');
  if (!Number.isFinite(value)) throw new Error('Risultato non valido');

  return value;
}

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

  useEffect(() => {
    document.body.classList.toggle('full-bleed', isMobile);

    return () => document.body.classList.remove('full-bleed');
  }, []);

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
      const evalResult = evaluateExpression(result);
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