import styled from 'styled-components'

export const Container = styled.aside`
  background-color: ${(props) => props.theme['very-dark-blue']};
  padding: 1.2rem 1rem;
  margin-left: 1.8rem;

  .sidebar-title {
    margin-bottom: 1.5rem;
  }
`

export const NewsBlock = styled.div`
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['grayish-blue']};
  padding-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`
