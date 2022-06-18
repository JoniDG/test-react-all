import React, { useContext } from 'react'
import { PokesContext } from './contexts/PokesProvider';

import { Poke } from './Poke'

export const Pokelist = () => {
  console.log("Pokelist");
  const { pokes } = useContext(PokesContext);
  return (
    <div className="container">
        <div className="row">
            {pokes.map(poke => (
                <div className="col-md-4" key={poke.id}>
                    <Poke poke={poke}/>
                </div>
            ))}  
        </div>
    </div>
  )
}
