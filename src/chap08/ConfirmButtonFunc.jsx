import React, { useState } from 'react'

function ConfirmButtonFunc(props) {

    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    }

    return (
        <button
            onClick={handleConfirm}
            disabled={isConfirmed}
        >
            {!isConfirmed? "확인" : "확인됨"}
        </button>
    )
}

export default ConfirmButtonFunc