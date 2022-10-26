import { InternalLink } from '../../atoms/Link/InternalLink'
import { Logo } from '../../atoms/Logo/Logo'
import { Container } from './styles'

// incluir prop de peso da fonte no InternalLink

export function Navigation() {
  return (
    <Container>
      <ul className="item-list">
        <li>
          <InternalLink
            anchor="#"
            color="hsl(236, 13%, 42%)"
            colorHover="hsl(5, 85%, 63%)"
            size="1rem"
            text="Home"
          />
        </li>
        <li>
          <InternalLink
            anchor="#"
            color="hsl(236, 13%, 42%)"
            colorHover="hsl(5, 85%, 63%)"
            size="1rem"
            text="New"
          />
        </li>
        <li>
          <InternalLink
            anchor="#"
            color="hsl(236, 13%, 42%)"
            colorHover="hsl(5, 85%, 63%)"
            size="1rem"
            text="Popular"
          />
        </li>
        <li>
          <InternalLink
            anchor="#"
            color="hsl(236, 13%, 42%)"
            colorHover="hsl(5, 85%, 63%)"
            size="1rem"
            text="Trending"
          />
        </li>
        <li>
          <InternalLink
            anchor="#"
            color="hsl(236, 13%, 42%)"
            colorHover="hsl(5, 85%, 63%)"
            size="1rem"
            text="Categories"
          />
        </li>
      </ul>
    </Container>
  )
}
