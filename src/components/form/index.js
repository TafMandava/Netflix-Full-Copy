import React from 'react';
import { Container, Title, Input, Button } from './styles/form';

export default function Form({ children, ...restProps }) {
    return (
        <Container { ...restProps }>
            { children }
        </Container>
    );
}

Form.Title = function FormTitle({ children, ...restProps }) {
    return (
        <Title { ...restProps }>
            { children }
        </Title>
    );
}


Form.Input = function FormInput({ ...restProps }) {
    return (
        <Input { ...restProps } />
    );
}

Form.Button = function FormButton({ children, ...restProps }) {
    return (
        <Button { ...restProps }>
            { children }
            <img src="" alt="Sign In" />
        </Button>
    );
}
