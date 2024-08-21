import styled from 'styled-components'

export const BrandButton = styled.button<{ nav?: false }>`
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  margin: 0;
  margin-left: auto;
  padding: 0;
  img {
    border-radius: 50%;
    width: var(--header-height);
  }
  ${({ nav }) =>
    nav &&
    `
    position: absolute;
    right: 0;
    top: 0;
  `}
`

export const Header = styled.header`
  background-color: var(--blue-light);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 100%;

  nav {
    align-content: center;
    background-color: var(--blue);
    background-image: linear-gradient(
      160deg,
      rgba(198, 230, 243, 1) 0%,
      rgba(213, 227, 198, 1) 100%
    );
    border: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
    height: 100dvh;
    margin: 0;
    text-align: center;
    width: 100%;

    a {
      color: inherit;
      font-size: 3rem;
    }
    h1 {
      font-size: 4rem;
      margin: 0.5rem 0;
      position: absolute;
      left: 50%;
      top: 1.5rem;
      transform: translateX(-50%);
    }
    ul {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin: 0;
      margin-top: -4rem;
    }
    @media (max-width: 768px) {
      a {
        font-size: 2.5rem;
      }
      h1 {
        font-size: 3rem;
        word-wrap: nowrap;
        width: 100%;
        top: 4rem;
      }
    }
  }

  /* Transition for the popover itself */
  [popover]:popover-open {
    /* opacity: 1; */
    transform: translate3d(0, 0, 0);
  }

  [popover] {
    font-size: 1.2rem;
    padding: 10px;

    /* Final state of the exit animation */
    /* opacity: 0; */
    transform: translate3d(100%, 0, 0);

    transition: opacity 0.7s, transform 0.7s, overlay 0.7s allow-discrete,
      display 0.7s allow-discrete;
  }

  /* Needs to be after the previous [popover]:popover-open rule
to take effect, as the specificity is the same */
  @starting-style {
    [popover]:popover-open {
      /* opacity: 0; */
      transform: translate3d(100%, 0, 0);
    }
  }

  /* Transition for the popover's backdrop */

  [popover]::backdrop {
    background-color: rgb(0 0 0 / 0%);
    transition: display 0.6s allow-discrete, overlay 0.6s allow-discrete,
      background-color 0.6s;
  }

  [popover]:popover-open::backdrop {
    background-color: rgb(0 0 0 / 25%);
  }

  @starting-style {
    [popover]:popover-open::backdrop {
      background-color: rgb(0 0 0 / 0%);
    }
  }
`
