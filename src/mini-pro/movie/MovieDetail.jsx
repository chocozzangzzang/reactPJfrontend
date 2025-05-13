import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import CreditProfile from './CreditProfile';

const Wrapper = styled.div`
    width : 800px;
    height : calc(100vh - 150px);
    overflow : auto;
`

const MovieDetailDiv = styled.div`
    width : 800px;
    display : flex;
    margin : 0 auto;
`

const MovieCreditsDiv = styled.div`
    display : flex;
    text-align : center;
    margin-left : 0;
    margin-right : auto;
    align-items : center;
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

const TrailerDiv = styled.div`
    width : 100%;
    display : grid;
    grid-template-columns : repeat(3, 1fr);
    gap : 20px;
    padding-bottom : 30px;
`

const TextDiv = styled.div`
    padding : 20px;
    flex-grow: 1;
    text-align: center;
`

const TextDiv2 = styled.div`
    margin : 0 auto;
`

function MovieDetail(props) {

    const {movieId} = useParams();
    const getFetched = useRef(false);
    const [movie, setMovie] = useState();
    // const [movieCredits, setMovieCredits] = useState();
    const [topCredits, setTopCredits] = useState();
    // const [movieTrailers, setMovieTrailers] = useState();
    const [someOfMovieTrailers, setSomeOfMovieTrailers] = useState();

    async function getMovieDetail() {
        const thisMovie = await axios.get(`https://nomad-movies.nomadcoders.workers.dev/movies/${movieId}`);
        setMovie(thisMovie.data);
        // console.log(thisMovie);
    }

    async function getMovieCredits() {
        const credits = await axios.get(`https://nomad-movies.nomadcoders.workers.dev/movies/${movieId}/credits`);
        // setMovieCredits(credits.data);
        setTopCredits(credits.data.slice(0, 4));
        // console.log(credits);        
    }

    async function getMovieTrailers() {
        const trailers = await axios.get(`https://nomad-movies.nomadcoders.workers.dev/movies/${movieId}/videos`);
        // setMovieTrailers(trailers.data);
        setSomeOfMovieTrailers(trailers.data.slice(0, 12));
        // console.log(movieTrailers);
    }

    useEffect(() => {
        if(getFetched.current) return;
        else getFetched.current = true;

        getMovieDetail();
        getMovieCredits();
        getMovieTrailers();
    }, [])
    
    return (
        <Wrapper>
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
                                    <Link to={movie.homepage} target="_blank">Homepage &rarr;</Link>
                                    <br />
                                    <br />
                                    <Link to={`/movie/${movie.id}/similars`}>Similar &rarr;</Link>
                                </TextDiv>
                            </>
                    : <h4>Movie Info Is Loading...</h4>
                }
                
            </MovieDetailDiv>
            <TextDiv2>
                    <h3>Top Credits</h3>  
            </TextDiv2>
            <MovieCreditsDiv>
                {
                    topCredits ?

                    topCredits.map((topCredit) => {
                        return (
                            <CreditProfile 
                                originalName={topCredit.original_name}
                                characterName={topCredit.character}
                                profile={topCredit.profile_path}
                            />
                        )
                    }) : <></>
                }
                <Link to={`/movie/${movieId}/credits`}>More Credits &rarr;</Link>
            </MovieCreditsDiv>
            <TextDiv2>
                <h3>Trailers</h3>  
            </TextDiv2>
            <TrailerDiv>
                {
                    someOfMovieTrailers ?

                    someOfMovieTrailers.map((movieTrailer) => {
                        return (
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }} 
                                key={movieTrailer.key}>
                                <iframe 
                                    src={`https://www.youtube.com/embed/${movieTrailer.key}`}
                                    style={{ 
                                        position: 'absolute',
                                        border: 'none',
                                        width : '100%',
                                        height : '100%',
                                        top : 0,
                                        left : 0,
                                    }}
                                    allowFullScreen
                                    
                                    allow="autoplay; encrypted-media"
                                    title={movieTrailer.name}
                                ></iframe>
                            </div>
                        )
                    }) : <></>
                }
            </TrailerDiv>
        </Wrapper>
    )
}

export default MovieDetail;