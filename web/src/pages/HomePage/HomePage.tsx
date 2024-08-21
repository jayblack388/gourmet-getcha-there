import { Metadata } from '@redwoodjs/web'

import Menus from 'src/components/Menus'
import { TITLE, DESCRIPTION } from 'src/constants'

import { Image } from './HomePage.styled'

const HomePage = () => {
  return (
    <>
      <Metadata title={TITLE} description={DESCRIPTION} />

      <h1 data-viz="srOnly">{TITLE}</h1>
      <Menus />
      <Image alt={TITLE} loading="lazy" src="/images/Background.jpeg" />
      {/* <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p> */}
    </>
  )
}

export default HomePage
