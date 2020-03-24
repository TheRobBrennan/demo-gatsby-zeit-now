import React from 'react'
import { Router } from '@reach/router'

// Components
import Layout from 'components/Layout'
import Header from 'components/Header'
import Footer from 'components/Footer'
import DefaultBackgroundSlideShow from 'components/DefaultBackgroundSlideShow'
import Login from 'components/Login'

// Protected
import PrivateRoute from 'components/PrivateRoute'
import Profile from 'components/Profile'

const App = () => {
  // The purpose of this page is to have client-side only routes. Gatsby needs to build a static page and will render this page, so add a check
  if (typeof window === 'undefined') return null
  return (
    <Layout>
      <Header displaySubheading={false} />
      <Router>
        <Login path='/app/login' />
        <PrivateRoute component={Profile} path={'/app/profile'} />
      </Router>
      <Footer />
      <DefaultBackgroundSlideShow />
    </Layout>
  )
}

export default App
