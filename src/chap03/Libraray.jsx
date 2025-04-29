import React from "react";
import BookIntro from "./Book";

function Library(props) {
    return (
        <div>
            <BookIntro name="소플의 리액트 초급" numOfPages={300}/>
            <BookIntro name="나는 누구인가" numOfPages={413} />
            <BookIntro name="2026학년도 수능 대비 수능특강 미적분" numOfPages={128}/>
        </div>
    )
}

export default Library;

