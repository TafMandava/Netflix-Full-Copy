import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    border-bottom: 8px solid #222; 
`;


/*
    argin: auto; - bring it in the middle
*/
export const Inner = styled.div`
    display: flex;
    padding: 70px 45px;
    flex-direction: column;
    max-width: 815px;
    margin: auto;
`;

/*
    max-width: 670px; - Item shouldn't expand
*/
export const Item = styled.div`
    color: white;
    margin-bottom: 10px;
    max-width: 670px;

    &:first-of-type {
        margin-top: 3em;   
    }
`;

export const Frame = styled.div`
    margin-bottom: 40px;
`;

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 8px;
    color: white;
    text-align: center;

    @media (max-widrh: 600px) {
        font-size: 35px;
    }
`;

/*
    I do not want the user to be abke to select it using user-select: none;
*/
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 26px;
    font-weight: normal;
    background: #303030;
    padding: 0.8em 1.2em 0.8em 1.2em;
    user-select: none;
    align-items: center;

    img {
        filter: brightness(0) invert(1);
        width: 24px;

        @media (max-width: 600px) {
            width: 16px;
        }
    }

    @media (max-width: 600px) {
        width: 16px;
    }
`;

export const Body = styled.div`
    max-height: 1200px;
    tansition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    font-size: 26px;
    font-weight: normal;
    line-height: normal;
    background: #303030;
    padding: 0.8em 2.2em 0.8em 1.2em;
    white-space: pre-wrapp;
    user-select: none;

    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`;