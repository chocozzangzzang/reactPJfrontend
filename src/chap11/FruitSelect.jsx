import React, { useState } from 'react'

function FruitSelect(props) {

    const [value, setValue] = useState('grape');

    const handleValueChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert("선택한 과일 : " + value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                과일을 선택하세요!!
                <select value={value} onChange={handleValueChange}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="pineapple">파인애플</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}

export default FruitSelect