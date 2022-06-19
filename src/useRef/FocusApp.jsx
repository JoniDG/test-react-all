import React, { useState, useRef } from 'react'

export const FocusApp = () => {
	const [text, setText] = useState("")
	const inputRef = useRef();

	const handleFocus = () => {
		/* Al hacerlo asi necesitamos saber si o si el ID del elemento que queremos
		const input = document.getElementById("input");
		console.log(input.value);
		input.value="";
		input.focus(); */
		
		//inputRef.current.value = "";	//No es recomendable hacer esto ya que no modificamos el estado hasta que escribimos en el input (cambia el valor en el DOM sin pasar por React)
		inputRef.current.focus();	//inputRef.current es el elemento que queremos
	}

	return (
		<div>
			<input
				ref={inputRef}
				//id="input"
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button onClick={handleFocus}>Focus</button>
		</div>
	)
}
