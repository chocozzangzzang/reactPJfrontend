import React, { use, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PostList from './post/PostList';
import WriteButton from './ui/WriteButton';
// import postArr from './data/postArr.json';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PostDeleteContext from './post/PostDeleteContext';

const BtnWrap = styled.div`
    width : 800px;
    margin : 0 auto;
    margin-bottom : 8px;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
`;

const Wrapper = styled.div`
    width : 800px;
    height : 100vh;
    margin : 0 auto;
    text-align : center;
    padding : 10px;
    display : flex;
    flex-direction : column;
    gap : 16px;
    height: calc(100vh - 150px);
    overflow : auto;
`;

function BlogMain(props) {

    const navigate = useNavigate();
    const [ posts, setPosts ] = useState([]);
    const fetched = useRef(false);
    
    const deleteIdxFunc = (idx) => {
        // console.log(idx);
        const updatePosts = posts.filter((post) => post.postId != idx);
        setPosts(updatePosts);
    }

    const getPosts = async () => {
        try {
            const token = localStorage.getItem("JWTtoken");
            const response = await axios.get("http://localhost:8080/post/list", {
                headers : {
                    "Authorization" : `Bearer ${token}`,
                    "Content-Type" : "application/json",
                },
                withCredentials : true,
            });
            const data = response.data;
            
            if(Array.isArray(data)) {
                if(data.length > 0) setPosts(data);
            }
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(fetched.current) {return;}
        else fetched.current = true;
        getPosts();
    }, [])

    useEffect(() => {
        const updatePosts = posts.filter((post) => post.postId != PostDeleteContext);
        setPosts(updatePosts);
    }, [PostDeleteContext])

    return (
        <div>
            <Wrapper>
                <PostDeleteContext.Provider value={deleteIdxFunc}>
                    <PostList 
                        postArr={posts}
                        onClickItem={(item) => {navigate(`/postDetail/${item.postId}`)}}
                    />
                </PostDeleteContext.Provider>
                <BtnWrap>
                    <WriteButton
                        title="글 작성"
                        onClick={
                        () => {
                            navigate('/post-write');
                            }
                        }
                    />
                </BtnWrap>
            </Wrapper>
        </div>
        
    )
}

export default BlogMain