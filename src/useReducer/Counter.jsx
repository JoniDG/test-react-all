import React, { useReducer } from 'react'


const types = {
    increment: 'increment',
    decrement: 'decrement',
    reset: 'reset'
}

const reducer = (state, action) => {    //State = estado anterior (state=prevState)
    switch (action.type) {
        case types.increment:
            return state + 1    //Return un nuevo estado (state=newState)
        case types.decrement:
            return state - 1
        case types.reset:
            return init(initialState)
        default:
            return state
    }
}

/*Ejemplo flashero:
state=0
setState(state+1) ESTE PUEDE SER 1
setState(state+1) ESTE TAMBIEN PUEDE SER 1

Esto se soluciona asi:
setState(state => state+1) ESTE es 1
setState(state=> state+1) ESTE es 2

Al usar useReducer se puede simplificar:
dispatch({type: types.increment}) Si o si primero se ejecuta este dispatch
dispatch({type: types.increment}) y luego se ejecuta el dispatch de abajo
 */

const initialState = 10.25

const init = (value) => {
    return parseInt(value)
}


export const Counter = () => {

    const [counter, dispatch] = useReducer(reducer, initialState, init);    //El tercer parametro es una funcion para mutar el initialState

    return (
        <div>
            <h1>Clicks Counter 1: {counter}</h1>
            <button onClick={() => dispatch({ type: types.increment })}>
                Incrementar
            </button>
            <button onClick={() => dispatch({ type: types.reset })}>
                Reset
            </button>
            <button onClick={() => dispatch({ type: types.decrement })}>
                Decrementar
            </button>
        </div>
    )
}
