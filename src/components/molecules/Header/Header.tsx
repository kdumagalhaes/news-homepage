import { Logo } from '../../atoms/Logo/Logo'
import { Navigation } from '../Navigation/Navigation'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <Logo />
      <Navigation />
    </Container>
  )
}
