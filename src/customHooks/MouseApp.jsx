import React from 'react'
import { useMousePosition } from './hooks/useMousePosition'

export const MouseApp = () => {
    const position = useMousePosition();

    const background = `rgb(${position.x}, ${position.y}, 0)`;

  return (
    <div style={{background: background, height: "100vh"}}>
        <h2>Position X: {position.x}</h2>
        <h2>Position Y: {position.y}</h2>
    </div>
  )
}
