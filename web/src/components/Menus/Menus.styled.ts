import styled from 'styled-components'

export const Container = styled.aside`
  grid-area: info;
  padding: 1rem 0 1rem 5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  p {
    line-height: 1.75;
  }
  ul li {
    font-size: 1.25rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    ul {
      margin: 0.5rem 0 0.5rem 1rem;
      li {
        font-size: 1rem;
      }
    }
  }
`
