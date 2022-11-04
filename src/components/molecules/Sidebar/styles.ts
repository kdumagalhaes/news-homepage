import styled from 'styled-components'

export const Container = styled.aside`
  background-color: ${(props) => props.theme['very-dark-blue']};
  padding: 2rem 1.8rem;
  margin-left: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .sidebar-title {
    margin-bottom: 1.5rem;
  }
`

export const NewsBlock = styled.div`
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['grayish-blue']};
  padding-bottom: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }

  .paragraph {
    margin-top: 1rem;
  }
`
