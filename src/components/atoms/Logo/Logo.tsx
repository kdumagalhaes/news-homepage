import { Container } from './styles'
import LogoIcon from '../../../assets/images/logo.svg'

export function Logo() {
  return (
    <Container>
      <a href="#" className="logo-link">
        <span className="logo-text">W news</span>
        <img src={LogoIcon} alt="W news logo icon" className="logo-icon" />
      </a>
    </Container>
  )
}
