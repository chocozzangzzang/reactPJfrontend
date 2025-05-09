import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const MovieDetailDiv = styled.div`
    width : 500px;
    margin : 0 auto;
`

function MovieDetail(props) {

    const {movieId} = useParams();
    const getFetched = useRef(false);
    const [movie, setMovie] = useState();

    async function getMovieDetail() {
        const thisMovie = await axios.get(`https://nomad-movies.nomadcoders.workers.dev/movies/${movieId}`);
        setMovie(thisMovie.data);
        console.log(thisMovie);
    }

    useEffect(() => {
        if(getFetched.current) return;
        else getFetched.current = true;

        getMovieDetail();
    }, [])
    
    return (
        <MovieDetailDiv>
            <img src={movie.poster_path} alt={movie.title}/>
            {movie.title}
        </MovieDetailDiv>
    )
}

export default MovieDetail;