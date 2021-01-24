import React from 'react';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';

export default function Signin() {
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>
                        Sign In
                    </Form.Title>
                    <Form.Input placeholder="Email or phone number" />
                    <Form.Input placeholder="Password" />
                    <Form.Button>Sign In</Form.Button>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}