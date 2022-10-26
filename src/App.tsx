import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import { Logo } from './components/atoms/Logo/Logo'
import { Headings, Title } from './components/atoms/Title/Title'
import { PrimaryButton } from './components/atoms/Button/PrimaryButton'
import { InternalLink } from './components/atoms/Link/InternalLink'
import { Paragraph } from './components/atoms/Paragraph/Paragraph'
import { Hero } from './components/molecules/Hero/Hero'
import { Sidebar } from './components/molecules/Sidebar/Sidebar'
import { BottomNews } from './components/molecules/BottomNews/BottomNews'
import { Navigation } from './components/molecules/Navigation/Navigation'
import { Header } from './components/molecules/Header/Header'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Hero />
      <Sidebar />
      <BottomNews />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
