import React from 'react';
import styled from 'styled-components';

const BckBtn = styled.button`
    padding : 8px 16px;
    font-size : 16px;
    border-width : 1px;
    border-radius : 8px;
    cursor : pointer;
`;

function BackButton(props) {
    const {title, onClick} = props;

    return (
        <BckBtn onClick={onClick}>
            {title}
        </BckBtn>
    )
}

export default BackButton