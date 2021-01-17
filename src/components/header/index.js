import React from 'react';
import { Container, Background, ButtonLink, Logo } from './styles/header';
import { Link as ReactRouterLink } from 'react-router-dom';

export default function Header({ bg = true, children, ...restProps }) {
    return ( 
        bg ? 
        <Background { ...restProps }>
            { children }
        </Background>
        : children
    );
}

Header.Frame = function HeaderFrame({ bg = true, children, ...restProps }) {
    return ( 
        <Container { ...restProps }>
            { children }
        </Container>
    );
}

/*
    to - Pass where we want the logo to go to
*/
Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo { ...restProps } />
        </ReactRouterLink>
    );
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return (
        <ButtonLink { ...restProps }>
            { children }
        </ButtonLink>
    );
}
