import React, { useState } from 'react'
import { BisnietoNietoHijo } from './BisnietoNietoHijo';

export const NietoHijo = ({family, setFamily}) => {
    const [condition, setCondition] = useState(false);
    const agregarPariente = () => {
        if(family.length < 4){
            setFamily([...family, {parent: "BisNieto-Nieto-Hijo", name: 'Sofia', age: 2}]);
        }
        console.log(family.length);
    }

    return (
        <div>
            <h3>{family[2].parent} | Nombre: {family[1].name} | Edad: {family[1].age}</h3>
            <button onClick={() => agregarPariente()}>Agregar Pariente</button>
            <button onClick={() => setCondition(!condition)}>Mostrar nuevo pariente</button>
            {condition && family.length===4 && <BisnietoNietoHijo family={family[3]}/>}
        </div>
    )
}
