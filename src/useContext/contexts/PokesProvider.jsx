import React, { createContext } from 'react'
import initialPokes from '../consts/initialPokes';

const PokesContext = createContext();

const PokesProvider = ({children}) => {

    const data = {pokes: initialPokes}

  return (
        <PokesContext.Provider value = {data}>
            {children}
        </PokesContext.Provider>
  )
}

export { PokesProvider, PokesContext };