import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 2em;
    font-family: "Roboto", sans-serif;
    color: #ff1212;
`

export const List = styled.ul`
    list-style: none;
    padding: 0;
    font-family: "Roboto", sans-serif;
`

export const ListItem = styled.li`
    font-size: 1.5em;
    padding: 0.5em;
    margin: .5em 0;
    color: #fff;
    background: #222222;
`

export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background: #000;
    padding: 0.5rem 0;
    color: #fff;
`

