import React from 'react';
import { Container, Base, Title, Input, Submit, Text, TextSmall, Link, Error } from './styles/form';

export default function Form({ children, ...restProps }) {
    return (
        <Container { ...restProps }>
            { children }
        </Container>
    );
}

Form.Base = function FormBase({ children, ...restProps }) {
    return (
        <Base { ...restProps }>
            { children }
        </Base>
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

Form.Submit = function FormSubmit({ children, ...restProps }) {
    return (
        <Submit { ...restProps }>
            { children }
            <img src="" alt="Sign In" />
        </Submit>
    );
}

Form.Text = function FormText({ children, ...restProps }) {
    return (
        <Text { ...restProps }>
            { children }
        </Text>
    );
}

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
    return (
        <TextSmall { ...restProps }>
            { children }
        </TextSmall>
    );
}

Form.Error = function FormError({ children, ...restProps }) {
    return (
        <Error { ...restProps }>
            { children }
        </Error>
    );
}

Form.Link = function FormLink({ children, ...restProps }) {
    return (
        <Link { ...restProps }>
            { children }
        </Link>
    );
}

