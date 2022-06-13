import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const slide = keyframes`
    0% {
        clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
    }

    100%{
        clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
    }
`

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    overflow: hidden;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 2em;
    font-family: "Roboto", sans-serif;
    color: #222;
`

export const H3 = styled.h3`
    font-size: 1.5em;
    font-family: "Roboto", sans-serif;
    padding: 0.5em;
    margin: .25em 0;;
    color: #fff;
    background: #222;
    animation: ${slide} .5s ease-in-out;
    border-radius: 0.5em;
`

export const A = styled.a`
    text-decoration: none;
    color: #fff;
    &:hover {
        color: #006cdf; ;
    }
`

export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background: #222;
    padding: 0.5rem 0;
    color: #fff;
`
