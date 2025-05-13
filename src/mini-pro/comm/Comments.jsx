import React, { useState } from 'react'
import Comm from './Comm';
import styled from 'styled-components';
import TextInputArea from '../ui/TextInputArea';
import SbtBtn from '../ui/SbtBtn';
import axios from 'axios';

const CommsDiv = styled.div`
    width : 800px;
    margin : 0 auto;
    display : flex;
    flex-direction : column;
    
`;

const BtnWrap = styled.div`
    width : 800px;
    margin : 0 auto;
    margin-top : 20px;   
`;

function Comments(props) {

    const {comments, postId} = props;

    const [ newComment, setNewComment ] = useState("");

    const commentChange = (event) => {
        setNewComment(event.target.value);
        event.preventDefault();
    }

    return (
        <CommsDiv>
            {comments.map((comment, index) => {
                return (
                    <Comm 
                    key={comment.replyId}
                    indexINarr={index}
                    postId={postId}
                    replyId={comment.replyId}
                    reply={comment.replyContent}/>
                )
            })}
        <TextInputArea height={20} value={newComment} onChange={commentChange} />
        <BtnWrap>
            <SbtBtn 
            title={"댓글 작성"} 
            onClick={
                async (event) => {
                if(newComment === "") {alert("댓글을 입력하세요!!")}
                else {
                    event.preventDefault();
                    const token = localStorage.getItem("JWTtoken");
                    const response = await axios.post("http://localhost:8080/reply/write",
                        {
                            replyContent : newComment,
                            postId : postId,
                        },
                        { headers : {"Content-Type" : "application/json", "Authorization" : `Bearer ${token}`}
                        , withCredentials : true}
                    ).then((res) => {
                        // console.log(res);
                        comments.push({replyId : res.data.replyId, replyContent : res.data.replyContent});
                        setNewComment("");
                    })
                }
            }} />
        </BtnWrap>
        </CommsDiv>
    )
}

export default Comments