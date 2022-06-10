import React, { useState } from 'react'

export const Counter = () => {
    const [counter, setCounter]= useState(0);
    const [condition,setCondition]= useState(true);
    
    const increment = () => {
        setCounter(counter+1);  //Esto es asincrono, si colocamos un clg de counter lo veremos en 0
    }

    const decrement = () => {
        setCounter(counter-1);
    }

    const reset = () => {
        setCounter(0);
    }

    const [counter2, setCounter2]= useState(0);
    
    const increment2 = () => {
        setCounter2(counter2+1);  //Esto es asincrono, si colocamos un clg de counter lo veremos en 0
        setCounter2(prevCounter => prevCounter+1);
    }


  return (
    <div>
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
        
        <h1>Clicks Counter 2: {counter2}</h1>
        <button onClick={increment2}>
            Incrementar en 2
        </button>
        {condition && <h1>Hola</h1>}
        <div>
            <h1>Estado del mensaje: {condition.toString()}</h1>
            <button onClick={()=>setCondition(!condition)}>
                Toggle Message
            </button>
        </div>
    </div>
  )
}

