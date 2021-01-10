/*
    Macros give us the component name
    Macros are going to give us the name of the component in the dev tools
    
    With macros (gives it a nice name containing Inner)
    <div class="jumbotron__Inner-sc-13lir3c-0 kmnStf"><p>Jumbotron</p></div>
    
    Without macros
    <div class="sc-bdfBwQ hDpBk"><p>Jumbotron</p></div>

    Styled components can be empty
*/
import styled from 'styled-components/macro';

/*
    This is a style component. You can pass in any semantic element e.g.
        -- styled.p
        -- styled.h1
        -- styled.h2
        -- styled.section
        -- styled.div
    Give it a template text containing regular css rules
        -- styled.div`
                css rules
            `
*/

/*
    The grey border line will be difficult to get without encapsulating Inner
    Encapsulating Inner inside Item
    I will have a div that has a width of 100% and goes around the entire page
    But with an Inner it will go ddown maybe with a 1000 pixels
    We can make some css modifications such as a full width border
*/
export const Item = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    color: white;
    overflow: hidden;
`;

/* 
    We are using flex-direction because generally when we are on the Netflix home page we either have the image to the left or right

    Using flex-direction together with media queries to create a different layout for different screen sizes/devices
    Responsive layout - makes a one column layout instead of a two-column layout
*/
export const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${( { direction } ) => direction};
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Container = styled.div`
`;

/*
    If you have a media of a maximum width of 1000 pixels set the width to 100% padding top and botton to 0 pixels, padding left and right to 45 pixels, align text to the right
*/
export const Pane = styled.div`
    width: 50%;

    @media (max-width: 1000px) {
        width: 100%;
        padding 0 45px;
        text-align: center;
    }
`;

/*
    We want font the font size of the title to be bigger.
    To demonstrate what we want to sell
    Font size should go down to 35 pixels
*/
export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-bottom: 8px;

    @margin (max-width: 600p) {
        font-size: 35px;
    }
`;

/*
    I want font size to go down to 18 pixels
*/
export const SubTitle = styled.h2`
    font-size: 26px;
    font-weight: normal;
    line-height: normal;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;