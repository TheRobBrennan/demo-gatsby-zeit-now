import React from 'react'

// Components
import Layout from 'components/Layout'
import Footer from 'components/Footer'
import Header from 'components/Header'
import DefaultBackgroundSlideShow from 'components/DefaultBackgroundSlideShow'

const IndexPage = () => (
  <Layout>
    <Header displaySubheading={true} />
    <h2>Ready? Let's go.</h2>
    {/* TODO: Display the purple platypus playing the bongos static asset */}
    <Footer />
    <DefaultBackgroundSlideShow />
  </Layout>
)

export default IndexPage
