import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}
body {
    font-family: 'Inter', sans-serif;
    background-color: ${(props) => props.theme['off-white']};
    color: ${(props) => props.theme['very-dark-blue']};
    -webkit-font-smoothing: antialiased;
}
body, input, textarea, button {
    font-weight: 400;
    font-size: 15px;
}
button {
    cursor: pointer;
}
`
