import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${({ theme }) => theme.text.body};
    }
`;
