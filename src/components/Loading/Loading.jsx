import React from 'react';
import styled from 'styled-components';

function Loading() {
    return (
        <DivA>
            <DivB></DivB>
        </DivA>
    )
}
const DivA = styled.div`
    min-width: 100%;
    min-height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`

const DivB = styled.div`
    display: block;
    width: 50px;
    height: 50px;
    border: 5px solid;
    border-color: whitesmoke;
    border-radius: 50%;
    border-bottom: 0;
    border-left: 0;
    animation: rotar 3s linear 0s infinite normal none;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);

    @keyframes rotar {
    from{transform: rotate(0);}
    to{transform: rotate(360deg);}
}

`

export default Loading
