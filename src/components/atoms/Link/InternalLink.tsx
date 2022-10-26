import { Container } from './styles'

interface InternalLinkProps {
  text: string
  color: string
  colorHover: string
  anchor: string
  size?: string
  weight?: string
}

export function InternalLink({
  text,
  color,
  colorHover,
  anchor,
  size = '1rem',
  weight = '400',
}: InternalLinkProps) {
  return (
    <Container
      textColor={color}
      textColorHover={colorHover}
      href={anchor}
      fontSize={size}
      fontWeight={weight}
    >
      {text}
    </Container>
  )
}
