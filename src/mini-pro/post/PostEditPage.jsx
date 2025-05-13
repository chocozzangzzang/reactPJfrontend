import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import BackButton from '../ui/BackButton';
import { useNavigate, useParams } from 'react-router-dom';
import TextInputArea from '../ui/TextInputArea';
import SbtBtn from '../ui/SbtBtn';
import axios from 'axios';

const BtnWrap = styled.div`
    width : 800px;
    margin : 0 auto;
`;

const Wrapper = styled.div`
    width : 800px;
    margin : 0 auto;
    margin-bottom : 20px;
    text-align : center;
    display : flex;
    flex-direction : column;
    gap : 16px;
`;

function PostWrite(props) {
    
    const navigate = useNavigate();
    const { postId } = useParams(); 

    const getPost = useRef(false);
    const [ nowPost, setNowPost ] = useState(null); 

    const [ title, setTitle ] = useState("");
    const [ content, setContent ] = useState("");
    const token = localStorage.getItem("JWTtoken");

    
    const titleChange = (event) => {
        setTitle(event.target.value);
        event.preventDefault();
    };
    const contentChange = (event) => {
        setContent(event.target.value);
        event.preventDefault();
    }

    const readPost = async () => {
        await axios.get(`http://localhost:8080/post/detail/${postId}`,
            {
                headers : {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            }}
        )
        .then((response) => {
            setNowPost(response.data); 
            setTitle(response.data.postTitle); 
            setContent(response.data.postContent);})
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        if(getPost.current) return;
        else getPost.current = true;
        readPost();
    }, [])

    return (
        <div>
            <BtnWrap>
                <BackButton 
                    title={"뒤로가기"}
                    onClick={() => {navigate('/')}}
                />
            </BtnWrap>
            <Wrapper>
                <label>제목</label>
                <TextInputArea height={20} value={title} onChange={titleChange} />
                <label>내용</label>
                <TextInputArea height={50} value={content} onChange={contentChange}/>
            </Wrapper>
            <BtnWrap>
                <SbtBtn
                    title={"글 수정"}
                    onClick={
                        async () => {
                        if(title === "" || content === "") {alert("빈 칸이 존재합니다.!!!");}
                        else {
                            if(!window.confirm("수정하시겠습니까?")) navigate("/");
                            // alert(`제목 : ${title} , 내용 : ${content}`);
                            if(title !== nowPost.postTitle || content !== nowPost.content) {
                                const response = await axios.put(`http://localhost:8080/post/edit/${postId}`,
                                    {
                                        postId : postId,
                                        postTitle : title,
                                        postContent : content,
                                    },
                                    { headers : {"Content-Type": "application/json", "Authorization" : `Bearer ${token}`}
                                    , withCredentials: true },
                                )
                                .then((res) => {
                                    console.log(res);
                                    setTitle("");
                                    setContent("");
                                    navigate("/");
                                })
                                .catch((error) => console.log(error))
                            } else {
                                alert("변경사항이 없습니다!!!!");
                            }
                        }
                    }}
                />
            </BtnWrap>
        </div>
    )
}

export default PostWrite