import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

/*  
    Put elements in the middle using the following css rules
        -- margin: auto;
        -- max-width: 450px;
    Move Form elements in the middle
        -- padding: 60px 68px 40px;
*/

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 660px;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    box-sizing: border-box;
    width: 100%;
    margin: auto;
    max-width: 450px;
    padding: 60px 68px 40px;
    margin-bottom: 100px;
`;

export const Base = styled.form`

`;

export const Title = styled.h1`

`;

export const Input = styled.input`

`;

export const Submit = styled.button`

`;

export const Text = styled.p`

`;

export const TextSmall = styled.p`

`;

/*
    Styling React Router Link
    I do not want any text decoration and if l hover give me a text underline
*/
export const Link = styled(ReachRouterLink)`
    color: white;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const Error = styled.div`

`;