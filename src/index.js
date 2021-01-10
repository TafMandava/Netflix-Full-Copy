import React from 'react';
import { render } from 'react-dom';
/*
    If some how the browser is applying some invinsible styling rules and ruining the experience for the user 
    Go ahead and import normalize.css
*/
import 'normalize.css'; 
import App from './App';
import { GlobalStyles } from './global-styles';


render(
    /*
        JSX Fragment
        Adjacent JSX elements must be wrapped in an enclosin tag.
    */
    <>
        <GlobalStyles />
        <App />
    </>,        
    document.getElementById('root')

);