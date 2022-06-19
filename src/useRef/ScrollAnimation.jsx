import React, { useState, useRef, useEffect} from 'react'

export const ScrollAnimation = () => {
    const [background, setBackground] = useState("blue")
    const divRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const {y} = divRef.current.getBoundingClientRect(); //getBoundingClientRect() devuelve un objeto con las propiedades de la posición del elemento en el DOM (y es la propiedad vertical)
            console.log(y);
            if (y <= -300) {
                setBackground("yellow")
            }
            else
            {
                setBackground("blue")
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    
  return (
    <div>
        <div ref={divRef} style={{height: "180vh", background}}>
            <h1>Scroll to change background color</h1>
        </div>
    </div>
  )
}
