import React from 'react';
import { Form } from '../components';

export function FormContainer() {
    return (
        <Form>
            <Form.Title>
                Sign In
            </Form.Title>
            <Form.Input placeholder="Email or phone number" />
            <Form.Input placeholder="Password" />
            <Form.Button>Sign In</Form.Button>
        </Form>
    );
}