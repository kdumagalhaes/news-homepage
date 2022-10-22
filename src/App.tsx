import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import { Logo } from './components/atoms/Logo/Logo'
import { Headings, Title } from './components/atoms/Title/Title'
import { PrimaryButton } from './components/atoms/Button/PrimaryButton'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Logo />
      <Title
        text="Lorem ipsum dolor"
        color="#567890"
        heading={Headings.H2}
        size="2rem"
      />
      <Title
        text="This is a title"
        color="red"
        heading={Headings.H3}
        size="1.5rem"
      />
      <PrimaryButton
        text="read more"
        background="hsl(5, 85%, 63%)"
        color="hsl(36, 100%, 99%)"
        backgroundHover="hsl(240, 100%, 5%)"
        colorHover="hsl(36, 100%, 99%)"
      />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
