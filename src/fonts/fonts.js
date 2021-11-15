import { createGlobalStyle } from 'styled-components'

import GraphikLCGLightWoff from "./GraphikLCGLight.woff"
import GraphikLCGLightWoff2 from "./GraphikLCGLight.woff2"
import GraphikLCGMediumWoff from "./GraphikLCGMedium.woff"
import GraphikLCGMediumWoff2 from "./GraphikLCGMedium.woff2"
import GraphikLCGSemiboldWoff from "./GraphikLCGSemibold.woff"
import GraphikLCGSemiboldWoff2 from "./GraphikLCGSemibold.woff2"

const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: "GraphikLCG";
        src: 
            url(${GraphikLCGLightWoff}) format("woff"),
            url(${GraphikLCGLightWoff2}) format("woff2");;
        font-weight: 300;
        font-style: light;
    }
    @font-face {
        font-family: "GraphikLCG";
        src: 
            url(${GraphikLCGMediumWoff}) format("woff"),
            url(${GraphikLCGMediumWoff2}) format("woff2");;
        font-weight: 500;
        font-style: medium;
    }
    @font-face {
        font-family: "GraphikLCG";
        src: 
            url(${GraphikLCGSemiboldWoff}) format("woff"),
            url(${GraphikLCGSemiboldWoff2}) format("woff2");;
        font-weight: 600;
        font-style: Semibold;
    }
`
export default GlobalFonts