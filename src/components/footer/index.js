import React from 'react';
import { Inner, Container } from './styles/footer';

export default function Footer({ children, ...restProps }) {
    return (
       <Inner>
           { children }
       </Inner>
    );
}

Footer.Container = function FooterContainer({ children, ...restProps }) {
    return (
        <Container { ...restProps }>
            { children }
        </Container>
    );
} 