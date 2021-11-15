import styled from 'styled-components'
import Hero from './components/Hero';
import GlobalFonts from './fonts/fonts';
import GlobalStyles from './GlobalStyles';

const AppWrapper = styled.div`
  margin: 20px;
`

function App() {
  
  return (
    <AppWrapper>      
      <GlobalStyles />
      <GlobalFonts />
          <Hero />
    </AppWrapper>
  )
}

export default App;
