import React from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
    height : ${(props) => props.height}px;
    padding : 16px;
    font-size : 16px;
    line-height : 20px;
`

function TextInputArea(props) {
    const {height, value, onChange} = props;

    return (
        <TextArea
            height = {height}
            value = {value}
            onChange = {onChange}
        />
    )
}

export default TextInputArea