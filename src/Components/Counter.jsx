// importo gli hooks che mi servono
import React, { useEffect, useState } from "react";

function Counter() {

  // variabili
  let counter = 0;
  let isToggled = false;

  // hooks
  const [currentstate, updatedstate] = useState(counter); // alternativa nello useState(0) inserisco direttamente il valore
  const [currenttoggle, updatedtoggle] = useState(isToggled); // alternativa nello useState(false) inserisco direttamente il valore

  // questo hook parte ad ogni caricamento/aggiornamento del componente
  useEffect(() => {
    console.log(currentstate);
  });
  
  // questa funzione richiama le altre al suo interno
  const handleClick = () => {
    increaseCounter();
    toggleElement();
  }

  // aumenta il counter
  const increaseCounter = () => {
    updatedstate(currentstate + 1);
  };

  // inverte la variabile currenttoggle ad ogni click
  const toggleElement = () => {
    updatedtoggle(!currenttoggle);
  };

  return(
    <div 
    className="text-center mt-4">
      <h1>Contatore</h1>
      {/* l'event listener deve essere per forza una funzione, ma si può fare anche inline con un arrow function */}
      <button onClick={handleClick} className="btn btn-info mb-3">{currentstate}</button>
      {/* un semplice if else */}
      {!currenttoggle && <h6>Pari</h6>}
      {currenttoggle && <h6>Dispari</h6>}
      {/* con ternario */}
      {/* {currenttoggle ? <h6>Dispari</h6> : <h6>Pari</h6>} */}
    </div>   
  )
}

export default Counter;