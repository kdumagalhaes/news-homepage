import styled from 'styled-components'

interface Props {
  textColor: string
  textColorHover: string
  fontSize?: string
  fontWeight?: string
}

export const Container = styled.a<Props>`
  color: ${(props) => props.textColor};
  text-decoration: none;
  transition: color 0.3s;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};

  &:hover {
    color: ${(props) => props.textColorHover};
  }
`
