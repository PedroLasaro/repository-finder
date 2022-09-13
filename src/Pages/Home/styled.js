import styled from "styled-components";

export const HomeContainer = styled.div`
    height: 90vh;
    display: grid;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`;

export const Content = styled.div`
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BottomContent = styled.div`
    position: relative;
    display: grid;
    bottom: 10px;
    justify-content: center;
`;

export const AboutMe = styled.button`
    display: inline-block;
    width: 5rem;
    text-align: center;
    margin: auto;
    background: #fff;
    padding: auto;
    color: #222;
`;

export const Input = styled.input`
    border: 1px solid #aaa;
    height: 2em;
    padding: 0 0.5em;
    width: 20.1em;
    border-radius: 1rem 0 0 1rem;
    align-self: center;
    &:focus,
    &:active {
        outline: none;
        box-shadow: #none;
    }
`;

export const Button = styled.button`
    height: 2.15em;
    width: 5.2em;
    border: 1px solid #aaa;
    border-radius: 0 1rem 1rem 0;
`;

export const ErrorMsg = styled.span`
    display: block;
    font-size: 1em;
    font-weight: 600;
    color: #ff1212;
    margin: .5em 0;
`;

export const Image = styled.img`
    object-position: center;
    margin-bottom: 0.5em;
`;