import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        background: #ffff;
        font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-weight: 400;
        font-size: 16px;
    }

    a {
        color: inherit ;
        text-decoration: none;
    }

    button {
        background-color: inherit;
        padding: 0;
        margin: 0;
        outline: none;
        border: none;
        cursor: pointer;
    }
`

export default GlobalStyle