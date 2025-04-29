import React from 'react'
import Post from './Post';
import styled from 'styled-components';

const ListDiv = styled.div`
    display : flex;
    flex-direction : column;
    gap : 16px;
`

function PostList(props) {

    const {postArr, onClickItem} = props;

    return (
        <ListDiv>
            {
                postArr.map((post) => {
                    return (
                        <Post 
                            key={post.postId}
                            post={post}
                            onClick={() => {
                                onClickItem(post);
                            }}
                        />
                    )
                })
            }
        </ListDiv>
    )

}

export default PostList