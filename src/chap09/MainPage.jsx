import React, { useState } from 'react'
import WarningBox from './WarningBox';

function MainPage(props) {

    const [displayWarning, setDisplayWaring] = useState(false);

    const handleWarning = () => {
        setDisplayWaring((prevState) => !prevState);
    }

    return (
        <div>
            <WarningBox warning={displayWarning} />
            <button onClick={handleWarning}>
                {displayWarning? "감추기" : "보이기"}
            </button>
        </div>
        
    )


}

export default MainPage