import React from 'react';
import { Inner,  Container, Pane, Title, SubTitle, Image } from './styles/jumbotron';

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

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
    return <Pane { ...restProps }>
                { children }
           </Pane>;
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
    return <Title { ...restProps }>
                { children }
           </Title>;
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
    return <SubTitle  { ...restProps }>
                { children }
           </SubTitle >;
}

/*
    Image element does not have children
*/
Jumbotron.Image = function JumbotronImage({ ...restProps }) {
    return <Image { ...restProps } />
}
