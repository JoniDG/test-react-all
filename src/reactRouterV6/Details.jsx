import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const { marca } = useParams()
    return (
        <div>Details de {marca}</div>
    )
}

export default Details