import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name : "이인제",
        comment : "안녕하세요 소플입니다!",
    },
    {
        name : "유재석",
        comment : "리액트 재미있네요!!",
    },
    {
        name : "Coco Park",
        comment : "리액트를 처음 배우기 시작했어요!!",
    }
]

// function CommentList(props) {
//     return (
//         <div>
//             <Comment name={"이인제"} comment={"제가 처음 만든 컴포넌트입니다."} />
//             <Comment name={"Coco Park"} comment={"리액트 연습을 하고 있어요!!"} />
//         </div>
//     )
// }

function CommentList(props) {
    return (
        <div>
            {
                comments.map((comment) => {
                    return (
                        <Comment name={comment.name} comment={comment.comment} />
                    );
                })
            }
        </div>
    );
}

export default CommentList;