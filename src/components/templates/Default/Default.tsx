import { Container } from './styles'

import { BottomNews, Header, Hero, Sidebar } from '../../molecules/index'

export function Default() {
  return (
    <Container>
      <Header />
      <div className="wrapper">
        <Hero />
        <Sidebar />
      </div>
      <BottomNews />
    </Container>
  )
}
