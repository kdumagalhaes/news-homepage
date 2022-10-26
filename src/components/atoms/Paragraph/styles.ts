import styled from 'styled-components'

interface Props {
  textColor: string
  fontSize: string
}

export const Container = styled.p<Props>`
  word-wrap: break-word;
  color: ${(props) => props.textColor};
  line-height: 1.5rem;
  font-size: ${(props) => props.fontSize};
`
