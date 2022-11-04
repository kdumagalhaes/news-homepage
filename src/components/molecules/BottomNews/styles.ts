import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const NewsBlock = styled.div`
  display: flex;

  .thumb {
    max-width: 60%;
    height: 60%;
  }

  .wrapper {
    margin-left: 1.5rem;
    max-height: 9.5rem;
    max-width: 14rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
