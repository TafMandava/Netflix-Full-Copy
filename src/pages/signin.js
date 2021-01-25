import React, { useState } from 'react';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signin() {

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    /*
        Check if there is an error. Initial value is an empty string
    */
    const [error, setError] = useState('');

    /*
        Check if form input elements are valid
        email & password
        Get more granular - Use regex to check if it's an actual email address or password adheres to a particular format
    */
    const isInvalid = password === '' || emailAddress === '';
    /*
        Pass the event when we get submission and prevent default on the event 
        because l do not want to go ahead and post to this particular page
    */
   const handleSignIn = (event) => {
       event.preventDefault();

       /*
           Firebase work
       */
   }

    return (
        <>
            <HeaderContainer>
                <Form>                  
                    <Form.Title>
                        Sign In
                    </Form.Title>

                    {
                        error && <Form.Error>{ error }</Form.Error>
                    }

                    {/*
                       Because it's a form element we need to pass in a method
                    */}
                    <Form.Base onSubmit={ handleSignIn } method="POST">
                        {/*
                            Destructure the target so that we do not have to do it like event.target
                        */}                        
                        <Form.Input 
                            placeholder="Email or phone number" 
                            value={ emailAddress }
                            onChange={ ({ target }) => setEmailAddress(target.value) }
                        />
                        {/*
                            Set type to password so that it blurs it out
                            Turn auto complete off
                        */}                           
                        <Form.Input
                            placeholder="Password"
                            type="password"
                            autoComplete="off"
                            value={ password }
                            onChange={ ({ target }) => setPassword(target.value) }
                        />
                        {/*
                            If it's not valid do not allow submit
                        */}                             
                        <Form.Submit disabled={ isInvalid } type="submit">
                            Sign In
                        </Form.Submit>
                        <Form.Text>
                            New to Netflix? <Form.Link to={ ROUTES.SIGN_UP }>Sign up now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}