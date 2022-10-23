import styled from 'styled-components'

interface Props {
  backgroundColor: string
  backgroundColorHover: string
  textColor: string
  textColorHover: string
}

export const Container = styled.button<Props>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  text-transform: uppercase;
  letter-spacing: 4px;
  padding: 1rem 0;
  width: 100%;
  border: none;
  font-weight: 700;
  transition: all 0.3s;

  &:hover {
    color: ${(props) => props.textColorHover};
    background-color: ${(props) => props.backgroundColorHover};
  }
`
