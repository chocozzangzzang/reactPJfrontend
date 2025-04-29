import React from 'react';
import styled from 'styled-components';

const MyTitle = styled.h1`
    font-size : 16px;
    font-weight : bold;
    color : black;
    text-align : center;
`;

function Title(props) {

    const {title} = props;

    return (
        <MyTitle>{title}</MyTitle>
    )
}

export default Title