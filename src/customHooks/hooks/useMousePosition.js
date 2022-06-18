import { useEffect, useState } from 'react'

export const useMousePosition = () => {
    const [position, setPosition] = useState({x: null, y: null})

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({x: e.clientX, y: e.clientY})
        }

        window.addEventListener('mousemove', handleMouseMove)   //Cuando se agrega un listener a un efecto
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)    //Se requiere remover el listener cuando el efecto se desmonte
        }
    }, [position])
  return (position)
}
