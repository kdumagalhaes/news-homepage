import { Container } from './styles'

interface ParagraphProps {
  text: string
  color: string
  size?: string
  cssHandler?: string
}

export function Paragraph({
  text,
  color,
  size = '1rem',
  cssHandler,
}: ParagraphProps) {
  return (
    <Container textColor={color} fontSize={size} className={cssHandler}>
      {text}
    </Container>
  )
}
