import React, { useEffect, useState } from "react";

function StateEx(props) {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `총 ${count}번 클릭한 컴포넌트입니다!!`;
    })

    return (
        <div>
            <p>{count} 번 클릭함</p>
            <button onClick={(() => setCount(count + 1))}>클릭 버튼</button>
        </div>
    )


}

export default StateEx;