import React, { useState } from 'react'

function NameForm(props) {

    const [value, setValue] = useState('');

    const handleEventHandler = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('입력한 이름 : ' + value);
        setValue('');
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름 :
                <input type="text" value={value} onChange={handleEventHandler}/>
            </label>
            <button type="submit">제출</button>
        </form>
    )

}

export default NameForm;