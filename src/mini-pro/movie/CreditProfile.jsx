import React from 'react'
import styled from 'styled-components';

const ProfileDiv = styled.div`
    width : 120px;
    display : flex;
    flex-direction : column;
    margin : 0 auto;
`

const TextBox = styled.div`
    width : 120px;
    height : 50px;
    margin : 0 auto;
    text-align : center;
    font-weight : 700;
`
const TextBox2 = styled.div`
    width : 120px;
    height : 50px;
    margin : 0 auto;
    text-align : center;
    font-weight : 500;
`

function CreditProfile(props) {

    const { originalName, characterName, profile } = props;

    return (
        <ProfileDiv>
            <img src={profile} alt={originalName}/>
            <TextBox>{originalName}</TextBox>
            <TextBox2>{characterName}</TextBox2>
        </ProfileDiv>
    )
}

export default CreditProfile