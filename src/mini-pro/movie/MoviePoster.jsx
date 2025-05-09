import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Poster = styled.div`
    padding-top : 10px;
    width : 120px;
    display : flex;
    margin : 0 auto;
    flex-direction : column;
    justify-content : center;
    text-align : center;
`

function MoviePoster(props) {

    const { movieId, title, poster } = props;
    const navigate = useNavigate();
    
    return (
        <Poster onClick={() => navigate(`/movie/${movieId}`)}>
            <img src={poster} alt={title}/>
            <p>{title}</p>
        </Poster>
    )
}

export default MoviePoster