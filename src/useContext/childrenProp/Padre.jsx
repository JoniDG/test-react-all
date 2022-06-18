import React, { useState } from 'react'

export const Padre = ({children}) => {
    console.log("Padre");
    const [counter, setCounter]= useState(0);

    const increment = () => {
        setCounter(counter+1);  //Esto es asincrono, si colocamos un clg de counter lo veremos en 0
    }
      
    const decrement = () => {
        setCounter(counter-1);
    }
      
    const reset = () => {
        setCounter(0);
    }
    
  return (
    <div>
        <h1>Padre</h1>
        <h1>Clicks Counter 1: {counter}</h1>
        <button onClick={increment}>
		    Incrementar
	    </button>
	    <button onClick={reset}>
		    Reset
	    </button>
	    <button onClick={decrement}>
		    Decrementar
	    </button>
        {children}
    </div>
  )
}
