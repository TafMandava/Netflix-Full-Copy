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

export const Pane = styled.div`
    width: 50%;
`;

export const Title = styled.h1`
`;

export const SubTitle = styled.h2`
`;

export const Image = styled.img`
`;