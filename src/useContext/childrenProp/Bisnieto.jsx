import React, { useContext } from 'react'
import { ProviderContext } from './Provider';

export const Bisnieto = () => {
    console.log("Bisnieto");
    const { counter3, increment, decrement, reset, setCounter3 } = useContext(ProviderContext);
    return (
        <div>
            <h1>Bisnieto</h1>
            <h2>Counter 3 creado en Provider: {counter3}</h2>
            <button onClick={increment}>
                Incrementar Counter 3 DESDE BISNIETO
            </button>
            <button onClick={reset}>
                Reset Counter 3 DESDE BISNIETO
            </button>
            <button onClick={decrement}>
                Decrementar Counter 3 DESDE BISNIETO
            </button>
            <button onClick={() => setCounter3(780)}>
                PONER EL Counter 3 EN 783 DESDE BISNIETO
            </button>
        </div>
    )
}
