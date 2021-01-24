import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`

`;

export const Base = styled.div`

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