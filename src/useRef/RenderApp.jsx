import React, { useEffect, useRef, useState } from 'react'

export const RenderApp = () => {
    const [text, setText] = useState("");

    const rendersRef = useRef(1);
    //Render 1 ref=1

    useEffect(() => {
        console.log("render:" + rendersRef.current);
        //Entra como 1 sale como 2 pero hasta que no haya otra renderizacion no pasa a ser 2 para mostrarse en "renders"
        rendersRef.current++;
    })


    return (
        <div>
            {/* Render 1 ref=1 */}
            <h1>Renders: {rendersRef.current} </h1>
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
            />
        </div>
    )
}
