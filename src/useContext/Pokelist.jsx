import React from 'react'
import initialPokes from '../consts/initialPokes'
import { Poke } from './Poke'

export const Pokelist = () => {
  return (
    <div className="container">
        <div className="row">
            {initialPokes.map(poke => (
                <div className="col-md-4" key={poke.id}>
                    <Poke poke={poke}/>
                </div>
            ))}  
        </div>
    </div>
  )
}
