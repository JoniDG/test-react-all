import React from 'react'
import { useState } from 'react'
import Card from './Card'

export const Loading = () => {
    const [show, setShow]= useState(false)
  return (
    <div>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <Card />}
    </div>
  )
}
