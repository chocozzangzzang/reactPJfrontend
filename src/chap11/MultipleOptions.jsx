import React, { useState } from 'react'

function MultipleOptions(props) {

    const [breakfast, setBreakfast] = useState(true);
    const [numOfGuest, setNumOfGuest] = useState(0);

    const submitValue = (event) => {
        alert(`아침 식사 여부 : ${breakfast}, 방문 인원 수 : ${numOfGuest}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={submitValue}>
            <label>아침 식사 여부</label>
            <input type="checkbox" checked={breakfast} onChange={(event) => {setBreakfast(event.target.checked)}}/>
            <br />
            <label>방문 인원 수</label>
            <input type="number" value={numOfGuest} onChange={(event) => {setNumOfGuest(event.target.value)}}/>
            <button type="submit">제출버튼</button>
        </form>
    )

}

export default MultipleOptions