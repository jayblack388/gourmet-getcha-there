import Footer from 'src/components/Footer'
import Navigation from 'src/components/Navigation'

import { Content } from './PageLayout.styled'

type PageLayoutProps = {
  children?: React.ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Navigation />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}

export default PageLayout
