import styled from 'styled-components'

export const Content = styled.main`
  height: calc(100% - var(--header-height));
  padding: 1rem 0.5rem;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  gap: 0 15rem;
  grid-template-areas: 'info image';
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'image'
      'info';
    gap: 1rem;
  }
`
