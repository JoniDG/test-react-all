import React from 'react'
import { NietoHijo } from './NietoHijo'

export const Padre = (props) => {   //props contiene (props.family "array", props.setFamily "funcion")
    return (
        <div>
            <h2>{props.family[1].parent} | Nombre: {props.family[1].name} | Edad: {props.family[1].age}</h2>
            <NietoHijo family={props.family} setFamily={props.setFamily}/>
        </div>
    )
}
