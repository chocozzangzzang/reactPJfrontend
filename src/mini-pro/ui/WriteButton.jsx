import React from 'react';
import styled from 'styled-components';

const WrBtn = styled.button`
    padding : 8px 16px;
    font-size : 16px;
    border-width : 1px;
    border-radius : 8px;
    cursor : pointer;
`;

function WriteButton(props) {
    const {title, onClick} = props;

    return (
        <WrBtn onClick={onClick}>
            {title}
        </WrBtn>
    )
}

export default WriteButton