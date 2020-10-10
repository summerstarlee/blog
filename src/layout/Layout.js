import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Container from '../components/Container'

import Nav from './Nav'
import Home from '../pages/home'
import Detail from '../pages/detail'

const Layout = () => {
  return (
    <div>
      <Router>
        <Nav />
        <div>
          <Container>
            <Route path="/" exact component={Home} />
            <Route path="/detail/:id" component={Detail} />
          </Container>
        </div>
      </Router>
    </div>
  )
}
export default Layout
