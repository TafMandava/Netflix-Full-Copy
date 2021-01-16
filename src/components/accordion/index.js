import React, { useState, useContext, createContext } from 'react';
import { Container, Title, Inner, Frame, Item, Header, Body } from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
    return (
        <Container { ...restProps }>
            <Inner>
                { children }
            </Inner>
        </Container>
    );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return (
        <Title { ...restProps }>
            { children }
        </Title>
    );
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
    return (
        <Frame { ...restProps }>
            { children }
        </Frame>
    );
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {

    const [toggleShow, setToggleShow] = useState(false);

    return (
        /*
            Pass it using a provider
            The values that we are going to pass are toggleShow and setToogleShow
            We have the provider which is wrapping the item which is going to consume everything
            We have the ToggleContext which is going to be the item

            Within the Item when we call it, we pass in the Header as a child
            It is going to be in the provider
            The issue is how do we get that information (toggleShow, setToogleShow) in Accordion.Header
        */
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item { ...restProps }>
                { children }
            </Item>
        </ToggleContext.Provider>
    );
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    /*
        To pass in toggleShow and setToogleShow destructure ToggleContext
    */
    const { toggleShow, setToggleShow } = useContext(ToggleContext);

    return (
        /*
            We want to get the values toggleShow and setToogleShow
            If the toggle is open we want to close it.  If it's closed we want to open it

            onClick={() => setToggleShow(!toggleShow)} will work 99% of the times but sometimes depending on how much state you have within your application React will batch this
            This means that if you set the toggle to false and then the user comes in and sets it to true, but there are so many things going on e.g. 
            there is a render happening, many states changing. React will say there are a lot of things changing so l'm going to wait until l get the other statea and variables together
            and l will switch it, but if the user hits it again the value will bw different
            Therefore, you have to use the notation below onClick={() => setToggleShow((toggleShow) => !toggleShow)} saying take the previous state toggleShow e.g false do the inverse !toggleShow and switch it to true         
        */
        <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)} { ...restProps }>
            { children }

            <pre>{JSON.stringify(toggleShow, null, 2)}</pre>
            
            {
                toggleShow ? (
                    <img src="/images/icons/close-slim.png" alt="Close" />
                ) : <img src="/images/icons/add.png" alt="Open" />
            }
        </Header>
    );
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { toggleShow } = useContext(ToggleContext);
    
    /*
        If toggleShow equals true return the body. Else if it's not return null
    */
    return toggleShow ? (
        <Body { ...restProps }>
            { children }
        </Body>
    ) : null;
}