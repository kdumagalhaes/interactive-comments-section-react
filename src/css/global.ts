import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    // colors
    --primary-moderate-blue: hsl(238, 40%, 52%);
    --primary-soft-red: hsl(358, 79%, 66%);
    --primary-light-grayish-blue: hsl(239, 57%, 85%);
    --primary-pale-red: hsl(357, 100%, 86%);

    --neutral-dark-blue: hsl(212, 24%, 26%);
    --neutral-grayish-blue: hsl(211, 10%, 45%);
    --neutral-light-gray: hsl(223, 19%, 93%);
    --neutral-very-light-gray: hsl(228, 33%, 97%);
    --neutral-white: hsl(0, 0%, 100%);

    // layout
    --mobile: 480px;
    --desktop: 1440px;

    // border
    --border-radius: 10px;
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
    background: var(--neutral-very-light-gray);
}
body, input, textarea, button {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
}
button {
    cursor: pointer;
}
`;
