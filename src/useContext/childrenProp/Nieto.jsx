import React from 'react'

export const Nieto = ({setCounter2, reset, decrement, increment}) => {
    console.log("Nieto");
  return (
    <div>
        <h1>Nieto</h1>
        <button onClick={increment}>
		     Incrementar Counter 2 DESDE NIETO
	      </button>
	     <button onClick={reset}>
		     Reset Counter 2 DESDE NIETO
	      </button>
	      <button onClick={decrement}>
		      Decrementar Counter 2 DESDE NIETO
	      </button>
        <button onClick={()=>setCounter2(780)}>
		      PONER EL Counter 2 EN 780
	      </button>
    </div>
  )
}
