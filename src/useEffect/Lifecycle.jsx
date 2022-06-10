import React, { useEffect, useState } from 'react'

export const Lifecycle = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    
    const incrementc1 = () => {
        setCounter1(counter1+1);
    }
    const resetc1 = () => {
        setCounter1(0);
    }
    const decrementc1 = () => {
        setCounter1(counter1-1);
    }

    const incrementc2 = () => {
        setCounter2(counter2+1);
    }
    const resetc2 = () => {
        setCounter2(0);
    }
    const decrementc2 = () => {
        setCounter2(counter2-1);
    }

    /*No hay regla para el orden en que se ejecutan los efectos, se ejecutan en el orden que los escribis*/
    useEffect(() => {
        console.log("USE EFFECT SIN DEPENDENCIA");      //Se ejecuta siempre que cambie cualquier estado en el componente
    });

    useEffect(() => {
        console.log("USE EFFECT DEPENDENCIA VACIA []");    //Se ejecuta la primera vez que cargue el componente
    },[]);
    
    useEffect(() => {
        console.log("USE EFFECT DEPENDENCIA [COUNTER1]");    //Se ejecuta cada vez que cambie el counter
    },[counter1]); 

    useEffect(() => {
        console.log("USE EFFECT DEPENDENCIA [COUNTER2]");    //Se ejecuta cada vez que cambie el counter
    },[counter2]); 

    useEffect(() => {
        console.log("USE EFFECT DEPENDENCIA [COUNTER1, COUNTER2]");    //Se ejecuta cada vez que cambie el counter
    },[counter1, counter2]); 
    
  return (
    <div>
        <h1>Clicks c1: {counter1}</h1>
        <button onClick={incrementc1}>
            Increment C1
        </button>
        <button onClick={resetc1}>
            Reset C1
        </button>
        <button onClick={decrementc1}>
            Decrement C1
        </button>

        <h1>Clicks c2: {counter2}</h1>
        <button onClick={incrementc2}>
            Increment C2
        </button>
        <button onClick={resetc2}>
            Reset C1
        </button>
        <button onClick={decrementc2}>
            Decrement C1
        </button>
    </div>
  )
}
