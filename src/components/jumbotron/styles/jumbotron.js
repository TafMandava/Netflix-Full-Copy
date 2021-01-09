/*
    Macros give us the component name
    Macros are going to give us the name of the component in the dev tools
    
    With macros (gives it a nice name containing Inner)
    <div class="jumbotron__Inner-sc-13lir3c-0 kmnStf"><p>Jumbotron</p></div>
    
    Without macros
    <div class="sc-bdfBwQ hDpBk"><p>Jumbotron</p></div>
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
                css rules           `
*/
export const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px
`;