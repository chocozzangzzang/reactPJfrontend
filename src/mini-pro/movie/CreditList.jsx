import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import CreditProfile from './CreditProfile';
import { useParams } from 'react-router-dom';

const CreditWrapper = styled.div`
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

function CreditList(props) {

    const { movieId } = useParams();
    const fetched = useRef(false);
    const [ movieCredits, setMovieCredits ] = useState();

    async function getMovieCredits() {
        const credits = await axios.get(`https://nomad-movies.nomadcoders.workers.dev/movies/${movieId}/credits`);
        setMovieCredits(credits.data);
    }

    useEffect(() => {
        if(fetched.current) return;
        else fetched.current = true;

        getMovieCredits();
    }, []);

    return (
        <CreditWrapper>{
            movieCredits ? 
            movieCredits.map((movieCredit) => {
                return (
                    <CreditProfile
                        originalName={movieCredit.original_name}
                        characterName={movieCredit.character}
                        profile={movieCredit.profile_path}

                    />
                )
            }) : <></>
        }
        </CreditWrapper>
    )
}

export default CreditList;