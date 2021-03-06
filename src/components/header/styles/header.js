import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;

    a {
        display: flex;
    }

    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`;

/*
    If there is no background image provided use the basic one
    padding: 18px 0 170px 0; - vertical height space between Opt Form and grey border
    border-bottom: 8px solid #222;
*/
export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${( { src } ) => 
        (src ? '../images/misc/${src}.jpg' : '../images/misc/home-bg.jpg')})
        top left / cover no-repeat;
    
    padding: 18px 0 170px 0;
    border-bottom: 8px solid #222;

    @media (max-width: 1000px) {
        padding: 18px 0 68px 0;
    }
`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;

    @media (max-width: 1449px) {
        height: 45px;
        width: 167px;
    };
`;

export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &:hover {
        background-color: #f40612;
    }
`;

