import React from 'react';
import styled from 'styled-components';

const MovBtn = styled.button`
    padding : 8px 16px;
    font-size : 16px;
    border-width : 1px;
    border-radius : 8px;
    border : none;
    cursor : pointer;
    background-color: #333;   /* 버튼 배경도 어두운 톤으로 */
    color: white;             /* 글자색 하얗게 */

    &:hover {
        background-color : #777;
    }
`;

function MoveButton(props) {
    const {title, onClick} = props;

    return (
        <MovBtn onClick={onClick}>
            {title}
        </MovBtn>
    )
}

export default MoveButton