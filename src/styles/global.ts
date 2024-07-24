import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Manrope", sans-serif;
    } 

    body {
        background-color: ${props => props.theme["zinc-950"]};
        transition: .25s;
    }
`