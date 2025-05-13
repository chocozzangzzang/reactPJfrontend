import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import MoviePoster from './MoviePoster';
import { useParams } from 'react-router-dom';

const SimilarWrapper = styled.div`
    width : 100%;
    margin : 0 auto;
    display: grid;
    grid-template-columns : repeat(5, 1fr);
    cursor: pointer;
    place-items: center;
    padding-top : 10px;
    height : calc(100vh - 150px);
    overflow : auto;
  }
`;

function SimilarList(props) {

    const movieFetched = useRef(false);
    const [ movies, setMovies] = useState([]);
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
        <SimilarWrapper>{
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
        </SimilarWrapper>
    )
}

export default SimilarList;