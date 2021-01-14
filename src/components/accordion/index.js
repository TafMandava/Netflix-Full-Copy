import React from 'react';
import { Container, Title } from './styles/accordion';

export default function Accordion({ children, ...restProps }) {
    return (
        <Container { ...restProps }>
            { children }
        </Container>
    );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return (
        <Title { ...restProps }>
            { children }
        </Title>
    );
}