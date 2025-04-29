import React, { useContext } from 'react';
import PostDeleteContext from './PostDeleteContext';
import styled from 'styled-components';
import { Pencil, Trash2 } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PostItem = styled.div`
    display : flex;
    flex : 1;
    padding : 16px;
    font-size : 16px;
    border-width : 1px;
    border-radius : 8px;
    background-color : white;
    border : 1px solid grey;
`
const TotalDiv = styled.div`
    width : 100%;
    display : flex;
    flex-direction : row;
`

const ButtonDiv = styled.div`
    padding : 16px;
`

// flex는 남은 공간을 모두 차지하게
const Title = styled.div`
    flex : 1; 
    align-items : center;
`

function Post(props) {
    
    const {post, onClick} = props;

    const deleteIdx = useContext(PostDeleteContext);
    const navigate = useNavigate();

    const modi = (event) => {
        event.preventDefault();
        navigate(`/postEdit/${post.postId}`);
    }

    const dele = async (event) => {
        event.preventDefault();
        if(window.confirm("삭제하시겠습니까?")) {
            try {
                // deleteIdx(post.postId);
                const token = localStorage.getItem("JWTtoken");
                await axios.delete(`http://localhost:8080/post/delete/${post.postId}`,
                    {
                        headers : {
                            "Authorization" : `Bearer ${token}`,
                            "Content-Type" : "application/json",
                        },
                        withCredentials : true,
                    })
                .then(() => {deleteIdx(post.postId)});
                
            } catch (error) {
                console.log(error);
            }
        }        
    }

    return (
        <TotalDiv>
            <PostItem
                onClick={onClick}
            >
            <Title>
                {post.postTitle}
            </Title>
            </PostItem>
            <ButtonDiv>
                <Pencil size={20} onClick={modi} style={{ cursor: "pointer", marginRight: "10px" }}/>
                <Trash2 size={20} onClick={dele} style={{ cursor: "pointer" }}/>
            </ButtonDiv>     
        </TotalDiv>
        
    )
}

export default Post