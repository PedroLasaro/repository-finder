import styled from "styled-components";

export const HomeContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`


export const Input = styled.input`
    border: 1px solid #aaa;
    height: 2em;
    padding: 0 0.5em;
    border-radius: .25rem 0 0 .25rem;
    align-self: center;

    &:focus,
    &:active {
        outline: none;
        box-shadow: #none;
    }
`;

export const Button = styled.button`
    height: 2em;
    border: 1px solid #aaa;
    border-radius: 0 .25rem .25rem 0;
    
`

export const ErrorMsg = styled.span`
    display: block;
    font-size: 1em;
    font-weight: 600;
    color: #ff1212;
`

export const Image = styled.img`
    object-position: center;
    margin-bottom: 0.5em;
`