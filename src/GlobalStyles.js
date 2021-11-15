import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'GraphikLCG', OpenSans, sans-serif;
        margin: 0;
        padding: 0;
        text-align: center;
    }
    html {
        font-size: 10px;
    }
    h1 {
        font-size: 6.4rem;
        font-weight: 600;
        line-height: 6.4rem;
        text-align: left;
    }
    p {
        font-size: 1.8rem;
        font-weight: 300;
        line-height: 3.2rem;   
    }
`

export default GlobalStyles