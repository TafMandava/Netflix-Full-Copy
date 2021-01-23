import React from 'react';
import { render } from 'react-dom';
/*
    If some how the browser is applying some invinsible styling rules and ruining the experience for the user 
    Go ahead and import normalize.css
*/
import 'normalize.css'; 
import App from './App';
import { GlobalStyles } from './global-styles';

/*
   Connecting our application to Firebase abd Seeding Data

    seed.js
        -- export function seedDatabase(firebase)

    firebase.prod.js
        -- import { seedDatabase } from '../seed';
        -- seedDatabase(firebase);

    index.js
        -- import { firebase } from './lib/firebase.prod';

    NB: Comment out the statement "seedDatabase(firebase);" after seeding data and refrshing the webpage
    
*/
import { firebase } from './lib/firebase.prod';

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