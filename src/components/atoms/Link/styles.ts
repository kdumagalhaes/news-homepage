import styled from 'styled-components'

interface Props {
  textColor: string
  textColorHover: string
  fontSize: string
}

export const Container = styled.a<Props>`
  color: ${(props) => props.textColor};
  font-weight: 700;
  text-decoration: none;
  transition: color 0.3s;
  font-size: ${(props) => props.fontSize};

  &:hover {
    color: ${(props) => props.textColorHover};
  }
`
