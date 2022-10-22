import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import { Logo } from './components/atoms/Logo/Logo'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Logo />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
