import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        background: ${colors.primaryLightColor};
        color: ${colors.primaryColor};
        position: relative;
    }

    html, body, #root{
        height: 100%;
    }

    button {
        cursor: pointer;
        background: ${colors.primaryColor};
        border: none;
        color: #fff;
        padding: 10px 20px;
        border-radius: 4px;
        font-weight: 700;
        transition: all 200ms;
    }

    button:hover {
        filter: brightness(85%);
    }

    a {
        text-decoration: none;
        color: ${colors.primaryColor};
    }

    ul {
        list-style: none;
    }

    footer{
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    /* body .Toastify .Toastify__toast-container .Toastify__toast--success {
        background: ${colors.successColor};
    } */

`;

export const Container = styled.section`
    max-width: 600px;
    background: #fff;
    margin: 30px auto;
    padding: 30px;
    border-radius: 7px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;
