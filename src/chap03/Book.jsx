import React from "react";

function BookIntro(props) {
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
            <h1>{`이 책은 ${props.numOfPages}페이지로 이루어져 있습니다.`}</h1>
        </div>
    )

}

export default BookIntro;