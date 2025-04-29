import React, { useCallback, useState } from 'react'
import ThemeContext from './ThemeContext';
import MainContext from './MainContext';

function BlackOrWhite() {

    const [theme, setTheme] = useState("light");

    // function이 여러번 렌더링 되는 것을 방지 //
    // theme이 바뀔 때만 새로 랜더링 //
    const toggleTheme = useCallback(() => {
        if(theme === "light") setTheme("dark");
        else if(theme === "dark") setTheme("light");
    }
    , [theme]);

    // ThemeContext에 값을 할당하는데, theme과 toggleTheme을 정의하여 할당함 //
    // MainContext에서 각각의 값이 정의된 ThemeContext를 사용할 수 있음 //
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MainContext />
        </ThemeContext.Provider>
    )
}

export default BlackOrWhite