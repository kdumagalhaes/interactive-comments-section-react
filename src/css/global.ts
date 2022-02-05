import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    // colors

    // layout
    --mobile: 480px;
    --desktop: 1440px;
    // border
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    @media (max-width: var(---desktop)) {
        font-size: 93.75%;
    }
    @media (max-width: var(---mobile)) {
        font-size: 87.;
    }
}
ul {
    list-style: none;
}
body {
    width: 100%;

}
body, input, textarea, button {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
}
button {
    cursor: pointer;
}
`;
