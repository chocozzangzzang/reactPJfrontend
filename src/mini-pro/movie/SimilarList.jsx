import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import MoviePoster from './MoviePoster';
import { useParams } from 'react-router-dom';

const MovieWrapper = styled.div`
    width : 100%;
    margin : 0 auto;
    display: grid;
    grid-template-columns : repeat(3, 1fr);
    cursor: pointer;
    place-items: center;
    background-color : lightgrey;
    padding-top : 10px;
  }
`;

function SimilarList(props) {

    const movieFetched = useRef(false);
    const [movies, setMovies] = useState([]);
    const { movieId } = useParams();

    async function getMovies() {
        console.log(movieId);
        const response = await axios.get(`https://nomad-movies.nomadcoders.workers.dev/movies/${movieId}/similar`);
        setMovies(response.data);
        console.log(response);
    }

    useEffect(() => {
        if(movieFetched.current) return;
        else movieFetched.current = true;
    
        getMovies();
    }, []);

    return (
        <MovieWrapper>{
            movies.map((movie) => {
                return (
                    <MoviePoster
                        key={movie.id}
                        movieId={movie.id}
                        title={movie.title}
                        poster={movie.poster_path}

                    />
                )
            })
        }
        </MovieWrapper>
    )
}

export default SimilarList;