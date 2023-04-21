import { ThemeProvider } from 'styled-components'
import GlobalStyles from "./components/styles/Global"
import Nav from './components/Nav'
import Hero from './components/Hero'

const theme = {
  colors: {

    //Neutral

    almostWhite: 'hsl(0, 0%, 98%)',
    mediumGray: 'hsl(0, 0%, 41%)',
    almostBlack: 'hsl(0, 0%, 8%)',
  },

  mobile: '768px'
}



function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Nav />
      <Hero />
    </ThemeProvider>
  )
}

export default App


