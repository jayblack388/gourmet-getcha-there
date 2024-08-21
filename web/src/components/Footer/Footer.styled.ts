import styled from 'styled-components'

export const Container = styled.footer`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto;
  padding: 0 1rem;
  ul li {
    margin-right: 2rem;
  }
  a {
    align-items: center;
    display: flex;
    justify-content: center;
    color: inherit;
  }
  small {
    align-content: center;
    margin-left: auto;
  }
`
