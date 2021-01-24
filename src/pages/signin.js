import React from 'react';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';

export default function Signin() {
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Base>
                        <Form.Title>
                            Sign In
                        </Form.Title>
                        <Form.Input placeholder="Email or phone number" />
                        <Form.Input placeholder="Password" />
                        <Form.Submit>Sign In</Form.Submit>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}