import React from 'react'
import { useParams, Link, Outlet } from 'react-router-dom'

export const Motos = () => {
    const { marca } = useParams()
    return (
        <div>
            <h1>Motos</h1>
            <h2>{marca}</h2>
            <Link to="details">Detalles</Link>  {/*Al poner solo details preserva toda la ruta anterior /motos/marca/"" */}
            <Outlet />  {/*Con Outlet le indicamos donde queremos que "aparezcan los details" */}
        </div>
    )
}
