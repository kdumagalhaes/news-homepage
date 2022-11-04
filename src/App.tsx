import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import { Default } from './components/templates/Default/Default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Default />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
