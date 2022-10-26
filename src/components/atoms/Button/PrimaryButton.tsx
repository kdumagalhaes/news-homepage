import { Container } from './styles'

interface PrimaryButtonProps {
  text: string
  background: string
  backgroundHover: string
  color: string
  colorHover: string
  maxWidth?: string
}

export function PrimaryButton({
  text,
  background,
  backgroundHover,
  color,
  colorHover,
  maxWidth,
}: PrimaryButtonProps) {
  return (
    <Container
      textColor={color}
      textColorHover={colorHover}
      backgroundColor={background}
      backgroundColorHover={backgroundHover}
      maxWidth={maxWidth}
    >
      {text}
    </Container>
  )
}
