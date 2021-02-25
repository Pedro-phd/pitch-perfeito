import {createGlobalStyle} from 'styled-components'

export const GradientBody = createGlobalStyle`
    *{
        font-family: 'Inter',sans-serif;
    }
    body{
        background: rgb(255,148,114);
        background: linear-gradient(45deg, rgba(255,148,114,1) 0%, rgba(242,112,156,1) 100%);
        height:100vh;
    }
`
export const WhiteBody = createGlobalStyle`
    *{
        font-family: 'Inter',sans-serif;
    }
    body{
        background: rgb(255,148,114);
        background: linear-gradient(45deg, rgba(255,148,114,1) 0%, rgba(242,112,156,1) 100%);
    }
`