import { Container } from './styles'

interface PrimaryButtonProps {
  text: string
  background: string
  backgroundHover: string
  color: string
  colorHover: string
}

export function PrimaryButton({
  text,
  background,
  backgroundHover,
  color,
  colorHover,
}: PrimaryButtonProps) {
  return (
    <Container
      textColor={color}
      textColorHover={colorHover}
      backgroundColor={background}
      backgroundColorHover={backgroundHover}
    >
      {text}
    </Container>
  )
}
