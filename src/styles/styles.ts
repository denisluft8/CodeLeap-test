import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 @font-face {
    font-family: 'Roboto', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
}
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
     
    html{
        min-height: 100%;
        scroll-behavior: smooth;
        font-family: 'Roboto', sans-serif;

    }

    #root{
        height: 100vh;
    }

    body {
        min-height: 100%;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }
    
    ::-webkit-scrollbar-track {
        background: #eeeeee;
    }
    
    ::-webkit-scrollbar-thumb {
        background: #7695EC;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: #587ee8;
    }
`;
