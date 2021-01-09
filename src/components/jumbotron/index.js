import React from 'react';
import { Inner,  Container } from './styles/jumbotron';

/*
    If no direction is passed default to a row
    restProps - Pass the rest pf the parameters
        -- I want to give the user the ability to pass anything down that they want
        -- If you pass down an object whatever it is l want to apply it to the first one that comes in
    Whenever there is a compond component the children must be passed down.
    Therefore, the Jumbotron compound should have children (It will be expecting Jumbotron's children in App.js)
*/
export default function Jumbotron({ children, direction = 'row', ...restProps }) {
    return (
        <Inner direction = { direction }>
            {/*
                Pulling Jumbotron's children in App.js
            */}
            { children }
        </Inner>
    );
}

/*
    Give me the children and the rest of the props because l'm going to honour everything that you give to me
    Return a style component Container from styles/jumbotron.js
    Pass down the children
*/
Jumbotron.Container = function JumbotronContainer({ children, ...restProps  }) {
    return <Container { ...restProps }>
               { children }
           </Container>;
}
