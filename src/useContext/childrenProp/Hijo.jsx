import React, { useState } from 'react'
import { Nieto } from './Nieto';

export const Hijo = () => {
    console.log("Hijo");
    const [counter2, setCounter2]= useState(0);

    const increment = () => {
        setCounter2(counter2+1);  
    }
      
    const decrement = () => {
        setCounter2(counter2-1);
    }
      
    const reset = () => {
        setCounter2(0);
    }
    
  return (
    <div>
        <h1>Hijo</h1>
        <h1>Clicks Counter 2: {counter2}</h1>
        <button onClick={increment}>
		    Incrementar
	    </button>
	    <button onClick={reset}>
		    Reset
	    </button>
	    <button onClick={decrement}>
		    Decrementar
	    </button>
        <Nieto setCounter2={setCounter2} reset={reset} decrement={decrement} increment={increment}/>    {/*Nieto no es CHILDREN de hijo o sea Hijo no tiene la prop CHILDREN que tiene Padre*/}
    </div>
  )
}
