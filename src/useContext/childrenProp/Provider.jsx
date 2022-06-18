import React, { createContext, useState } from 'react'

const ProviderContext = createContext();

const Provider = ({children}) => {
    console.log("Provider");
    const [counter3, setCounter3]= useState(0);

    const increment = () => {
        setCounter3(counter3+1); 
    }
      
    const decrement = () => {
        setCounter3(counter3-1);
    }
      
    const reset = () => {
        setCounter3(0);
    }
    const data ={counter3, increment, decrement, reset, setCounter3};
  return (
    <ProviderContext.Provider value={data}>
        {children}
    </ProviderContext.Provider>
  )
}

export { Provider, ProviderContext };