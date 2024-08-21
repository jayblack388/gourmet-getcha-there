import { useRef } from 'react'

import { Link, routes } from '@redwoodjs/router'

import { BrandButton, Header } from './Navigation.styled'

const Navigation = () => {
  const popoverRef = useRef(null)
  return (
    <Header>
      <BrandButton popovertarget="nav-popover">
        <img
          alt="Gourmet Getcha There"
          loading="lazy"
          src="/images/Logo.webp"
        />
      </BrandButton>

      <nav id="nav-popover" popover="auto" ref={popoverRef}>
        <h1>Gourmet Getcha There</h1>
        <BrandButton popovertarget="nav-popover" nav>
          <img
            alt="Gourmet Getcha There"
            loading="lazy"
            src="/images/Logo.webp"
          />
        </BrandButton>
        <ul>
          <li>
            <Link onClick={hideOnClick} to={routes.home()}>
              Home
            </Link>
          </li>
          {/* <li>
            <Link onClick={hideOnClick} to={routes.about()}>
              About
            </Link>
          </li> */}
        </ul>
      </nav>
    </Header>
  )
  function hideOnClick() {
    popoverRef.current.hidePopover()
  }
}

export default Navigation
