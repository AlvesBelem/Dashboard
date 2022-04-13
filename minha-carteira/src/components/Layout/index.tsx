import React from 'react'
import MainHeader from '../MainHeader'
import Aside from '../Aside'
import Content from '../Content'
import { Container } from './styles'

const Layout: React.FC = () => {
  return (
    <Container >
      <MainHeader />
      <Aside />
      <Content />
    </Container>

  )
}

export default Layout