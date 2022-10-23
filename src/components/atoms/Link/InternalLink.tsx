import { Container } from './styles'

interface InternalLinkProps {
  text: string
  color: string
  colorHover: string
  anchor: string
  size
}

export function InternalLink({
  text,
  color,
  colorHover,
  anchor,
  size,
}: InternalLinkProps) {
  return (
    <Container
      textColor={color}
      textColorHover={colorHover}
      href={anchor}
      fontSize={size}
    >
      {text}
    </Container>
  )
}
