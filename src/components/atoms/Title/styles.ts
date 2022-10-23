import styled from 'styled-components'

interface Props {
  titleColor: string
  fontSize: string
}

export const LargeTitle = styled.h2<Props>`
  color: ${(props) => props.titleColor};
  font-size: ${(props) => props.fontSize};
  font-weight: 800;
`

export const MediumTitle = styled.h3<Props>`
  color: ${(props) => props.titleColor};
  font-size: ${(props) => props.fontSize};
  font-weight: 800;
`
