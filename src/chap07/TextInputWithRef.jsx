import React, { useRef } from 'react'

function TextInputWithRef(props) {
    
    const inputElem = useRef(null);

    const onButtonClick = () => {
        inputElem.current.focus(); // input tag를 focus함 !!
    }
  
    return (
        <>
            <input ref={inputElem}></input>
            <button onClick={onButtonClick}>클릭버튼</button>
        </>
  )
}

export default TextInputWithRef;