import React, { useState } from 'react'

function RequestForm(props) {

    const [value, setValue] = useState('요청사항을 입력하세요!!');

    const handleSubmit = (event) => {
        alert("요청사항 !! : " + value);
        setValue('요청사항을 입력하세요!!');
        event.preventDefault();
    }

    const handleValueChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                요청사항
                <textarea value={value} onChange={handleValueChange}></textarea>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}

export default RequestForm