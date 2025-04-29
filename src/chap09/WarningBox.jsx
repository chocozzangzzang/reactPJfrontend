import React from 'react'

function WarningBox(props) {

    // false이면 null리턴 ==> 랜더링 x
    // true이면 경고 div를 리턴
    if(!props.warning) {return null;}
    else {
        return (
            <div>
                !!!!!!!경고!!!!!!!
            </div>
        )
    }

}

export default WarningBox