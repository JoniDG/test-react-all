import React from 'react'
import useCounter from './hooks/useCounter'

export const Counter = () => {
    /*Al usar array si hay algo que necesito traer individualmente utilizo ", , "  hasta llegar a lo que necesito, si necesito renombrar es mejor array*/
    /*Al usar Objetos si hay algo especifico que necesito directamente lo traigo */
    const [counter, increment, decrement, reset] = useCounter();
    const [counter2, increment2, decrement2, reset2] = useCounter();
  return (
    <div>
        <h1>Clicks: {counter} </h1>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
        {/*Los hooks se pueden usar cuantas veces queramos, no se comparten los estados. counter ≠ counter2 al igual que sus funciones increment, etc*/}
        <h1>Clicks 2: {counter2} </h1>
        <button onClick={increment2}>Increment 2</button>
        <button onClick={reset2}>Reset 2</button>
        <button onClick={decrement2}>Decrement 2</button>
    </div>
  )
}
