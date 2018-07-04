import App from 'next/app'
import {injectGlobal} from "styled-components";
import csswipe from 'css-wipe/js'

injectGlobal`
  ${csswipe};
  
  html {
    font-size: 20px;
  }
`

export default App