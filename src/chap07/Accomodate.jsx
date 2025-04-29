import React, { useEffect, useState } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accomodate(props) {

    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);
    // 호출한 Hook인 useCounter를 호출함 -> initialValue를 0으로 설정함 :: 인원이 0 //

    useEffect(() => {
        console.log("======================");
        console.log("useEffect() is called.");
        console.log(`isFull : ${isFull}`);
    });
    // 값이 변경될 때 마다 호출출

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value : ${count}`);
    }, [count]);
    // count 값이 바뀌는 경우 호출되며 isFull을 변경함

    return (
        <div style={{padding : 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>입장</button> 
            {/* 입장 버튼 :  isFull인 경우 버튼이 클릭되지 않도록 함*/}
            <button onClick={decreaseCount}>퇴장</button>
            {/* 퇴장 버튼 : count를 줄여서 현재 있는 인원 수를 줄임 */}

            {isFull && <p style={{ color : 'red' }}> 정원이 가득찼습니다.</p>}
            {/* isFull -> MAX CAPACITY에 도달하는 경우 P TAG를 호출함 */}
        </div>
    );
}

export default Accomodate;