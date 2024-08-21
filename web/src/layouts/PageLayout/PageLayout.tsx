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
    </>
  )
}

export default PageLayout
