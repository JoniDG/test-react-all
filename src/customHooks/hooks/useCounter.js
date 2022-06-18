import {useState} from 'react'
/*Un hook es una funcion que interactua y almacena logica de estado*/
const useCounter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);  //Esto es asincrono, si colocamos un clg de counter lo veremos en 0
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(0);
    }

    return [counter, increment, decrement, reset];
}

export default useCounter;