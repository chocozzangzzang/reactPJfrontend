import React from 'react';
import MoveButton from './MoveButton';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TtDiv = styled.div`
    width : 500px;
    margin : 0 auto;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    margin-top : 16px;
    margin-bottom : 16px;
    background : #333;
    padding : 12px;
    border-radius : 8px;
`;

const TopBar = () => {
    const navigate = useNavigate();

    return (
        <TtDiv>
            <MoveButton title="메인" onClick={() => navigate('/')}/>
            <MoveButton title="날씨화면" onClick={() => navigate('/weather')}/>
            <MoveButton title="상품목록" onClick={() => alert("상품목록")}/>
        </TtDiv>
    );
};

export default TopBar;