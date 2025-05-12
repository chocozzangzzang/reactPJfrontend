import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
// import postArr from '../data/postArr.json';
import styled from 'styled-components';
import BackButton from '../ui/BackButton';
import Comments from '../comm/Comments';
import axios from 'axios';
import CommDeleteContext from '../comm/CommDeleteContext';
import CommEditContext from "../comm/CommEditContext";

const BtnWrap = styled.div`
    width : 800px;
    margin : 0 auto;
`;

const PostDiv = styled.div`
    width : 800px;
    margin : 0 auto;
    padding : 10px;
    display : flex;
    flex-direction : column;
    gap : 16px;
`;

const InsideDiv = styled.div`
    border : 2px solid lightgrey;
    border-radius : 8px;
    padding : 8px;
`

const TitleDiv = styled.div`
    border : 1px solid lightgrey;
    font-size : 16px;
    font-weight : bold;
    border-radius : 8px;
    text-align : center;
    padding : 16px;
`;

const ContentDiv = styled.div`
    padding : 16px;
    line-height : 1.5;
`;

const CommentDiv = styled.div`
    width : 800px;
    height : 100vh;
    margin : 0 auto;
    padding : 10px;
    display : flex;
    flex-direction : column;
    gap : 16px;
`;

function PostViewPage(props) {
    
    const {postId} = useParams();
    const navigate = useNavigate();
    const [ post, setPost ] = useState(null);
    const [ replies, setReplies ] = useState([]);
    const afterAxios = useRef(false);

    const getPost = async(pid) => {
        try {
            const token = localStorage.getItem("JWTtoken");
            const response = await axios.get(`http://localhost:8080/post/detail/${pid}`,
                {
                    headers : {
                        "Content-Type" : "application/json",
                        "Authorization" : `Bearer ${token}`
                    },
                    withCredentials : true,
                }
            );
            const data = response.data;

            // console.log(data);

            if(data == null) {
                alert("내용이 없는 글입니다.");
                navigate("/");
            } else {
                setPost(data);
                setReplies(data.replyDTOS);
            }
        }
        catch(error) {
            console.log(error);
        }
    };

    const commDeleteIdx = (commIdx) => {
        const newReplies = replies.filter((reply) => reply.replyId != commIdx);
        setReplies(newReplies);
    };

    const commEditor = (idx, comment) => {
        const prevReplies = [...replies];
        prevReplies[idx].replyContent = comment;
        setReplies(prevReplies);
    };

    useEffect(() => {
        if(afterAxios.current) return;
        else afterAxios.current = true;

        getPost(postId);
    }, [])

    // const post = postArr.find((p) => {return p.id == postId;});

    if(post) {
        return (
            <div>
                <BtnWrap>
                    <BackButton title={"뒤로가기"} onClick={() => navigate('/')}/>
                </BtnWrap>
                <PostDiv>
                    <InsideDiv>
                        <TitleDiv>
                            제목 : {post.postTitle}
                        </TitleDiv>
                        <ContentDiv>
                            {post.postContent}
                        </ContentDiv>
                    </InsideDiv>
                </PostDiv>
                <CommDeleteContext.Provider value={commDeleteIdx}>
                    <CommEditContext.Provider value={commEditor}>
                        <CommentDiv>
                            <Comments comments={replies} postId={postId}/>
                        </CommentDiv>
                    </CommEditContext.Provider>
                </CommDeleteContext.Provider>
            </div>        
        )
    }
}

export default PostViewPage