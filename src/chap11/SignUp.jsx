import React, { useState } from 'react'

function SignUp(props) {

    const [name, setName] = useState("");
    const [gender, setGender] = useState("남자")

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    }

    const handleSubmit = (event) => {
        alert(`이름 : ${name}, 성별 : ${gender}`);
        event.preventDefault();
        setName("");
        setGender("남성");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름 : 
            </label>
            <input type="text" value={name} onChange={handleNameChange}/>
            <br />
            <label>
                성별 : 
                <select value={gender} onChange={handleGenderChange}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>       
            <button type="submit">제출 버튼</button>
        </form>
    )

}

export default SignUp