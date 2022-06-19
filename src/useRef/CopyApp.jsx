import React, { useState, useRef} from 'react'

export const CopyApp = () => {
    const [text, setText] = useState("")
    const [isCopied, setIsCopied] = useState(false)
    const inputRef = useRef();

    const handleCopy = () => {
        inputRef.current.select();
        document.execCommand("copy");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    }

    return (
		<div>
            {isCopied ? <p>Copied!</p> : null}
			<input
				ref={inputRef}
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button onClick={handleCopy}>Copy</button>
		</div>
	)
}
