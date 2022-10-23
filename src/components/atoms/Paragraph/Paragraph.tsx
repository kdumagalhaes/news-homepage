import { Container } from './styles'

interface ParagraphProps {
  text: string
  color: string
}

export function Paragraph({ text, color }: ParagraphProps) {
  return <Container textColor={color}>{text}</Container>
}
