import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding : 1em;
    background : grey;
`;

const Title = styled.h1`
    font-size : 1.5em;
    color : white;
    text-align : center;
`;

const Button = styled.button`
    color : ${props => props.dark ? "white" : "black"};
    background : ${props => props.dark? "black" : "white"};
    border : 1px solid black;
`

const NormalButton = styled.button`
    color : grey;
    border : 2px solid palevioletred;
`
const ExtendedButton = styled(NormalButton)`
    border-radius : 16px;
`
// 곡선을 추가 //

function StyledComp(props) {

    return (
        
        <Wrapper>
            <Title>
                안녕 리액트!!
                <br />
                <Button>일반 버튼</Button>
                <Button dark>다크 버튼</Button>
                <br />
                <NormalButton>일반 버튼2</NormalButton>
                <ExtendedButton>확장 버튼2</ExtendedButton>
            </Title>
        </Wrapper>
        

    );
}

export default StyledComp