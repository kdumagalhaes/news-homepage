import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import { Hero } from './components/molecules/Hero/Hero'
import { Sidebar } from './components/molecules/Sidebar/Sidebar'
import { BottomNews } from './components/molecules/BottomNews/BottomNews'
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
