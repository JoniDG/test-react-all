import React, { useState } from 'react'
import { Padre } from './Padre'

export const Abuelo = () => {

    const [family, setFamily] = useState([
        { parent: "Abuelo", name: 'Juan', age: 75 }, 
        { parent: "Padre", name: 'Pedro', age: 50 }, 
        { parent: "Hijo-Nieto", name: 'Jorge', age: 25 }
    ])

    return (
        <div>
            <h1>{family[0].parent} | Nombre: {family[0].name} | Edad: {family[0].age}</h1>
            <Padre family={family} setFamily={setFamily}/>
        </div>
    )
}
