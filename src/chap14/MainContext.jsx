import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

function MainContext(props) {

    // BlackOrWhite.jsx에서 정의한 Provider에 의해 ThemeContext를 사용할 수 있음 //
    // 이 때 Consumer를 사용하지 않고 uesContext를 사용함 //
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div
            style={{
                width : "100vw",
                height : "100vh",
                padding : "1.5rem",
                backgroundColor : theme === "light" ? "white" : "black",
                color : theme === "light" ? "black" : "white",
            }}
        >
            <p>안녕하세요. 테마 변경이 가능한 사이트입니다!!</p>
            <button onClick={toggleTheme}>테마 변경 버튼</button>
        </div>
    )
}

export default MainContext