import React from 'react'

export const BisnietoNietoHijo = ({family}) => {
  return (
    <div>
        <h4>{family.parent} | Nombre: {family.name} | Edad: {family.age}</h4>
    </div>
  )
}
