import React from 'react';
import styled from 'styled-components';

const SBtn = styled.button`
    padding : 8px 16px;
    font-size : 16px;
    border-width : 1px;
    border-radius : 8px;
    cursor : pointer;
`;

function SbtBtn(props) {
    const {title, onClick} = props;

    return (
        <SBtn onClick={onClick}>
            {title}
        </SBtn>
    )
}

export default SbtBtn