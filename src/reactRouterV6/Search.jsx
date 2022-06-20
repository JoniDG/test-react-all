import React from 'react'
import { Link } from 'react-router-dom'

export const Search = () => {
    const motos = [
        "Yamaha",
        "Kawasaki",
        "Suzuki",
        "Honda",
    ]
    return (
        <div>
            <h1>Search</h1>
            <ul>
                {motos.map((moto) => {
                    return <li key={moto}><Link to={`/motos/${moto}`}>{moto}</Link></li>
                })}
            </ul>

        </div>
    )
}
