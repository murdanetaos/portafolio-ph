import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --text-color: black;
        --hover-color: #f59e0b; /* Tailwind yellow-500 */
    }

    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        background-color: #f3f4f6; /* Light gray background */
    }
`;

export default GlobalStyle;
