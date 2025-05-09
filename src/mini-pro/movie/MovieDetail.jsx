import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const MovieDetailDiv = styled.div`
    width : 500px;
    display : flex;
    margin : 0 auto;
`

const PosterDiv = styled.div`
    width : 180px;
    display : flex;
    flex-direction : row;
    flex-shrink: 0;

    img {
        max-width : 100%;
        height : auto;
    }
`

const TextDiv = styled.div`
    padding : 20px;
    flex-grow: 1;
    text-align: center;
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
            {
                movie ? <>
                            <PosterDiv>
                                <img src={movie.poster_path} alt={movie.title}/>
                            </PosterDiv>
                            <TextDiv>
                                <h3>{movie.title}</h3>
                                <h5>{movie.overview}</h5>
                                <h4>★ {movie.vote_average.toFixed(2)}</h4>
                                <p>Hompage &rarr;</p>
                                <p>Similar &rarr;</p>
                            </TextDiv>
                        </>
                : <h4>Movie Info Is Loading...</h4>
            }
            
        </MovieDetailDiv>
    )
}

export default MovieDetail;