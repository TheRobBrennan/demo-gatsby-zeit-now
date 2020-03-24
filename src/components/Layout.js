import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'sass/main.scss'

class Layout extends Component {
  render () {
    const { children } = this.props

    // TODO: Refactor StaticQuery HOC using the useStaticQuery hook
    // TODO: Enhance siteMetadeta to include a Twitter account
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                description
                url
                imageUrl
                keywords
                type
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content: data.site.siteMetadata.description
                },
                { name: 'keywords', content: data.site.siteMetadata.keywords },
                { property: 'og:title', content: data.site.siteMetadata.title },
                {
                  property: 'og:description',
                  content: data.site.siteMetadata.description
                },
                { property: 'og:url', content: data.site.siteMetadata.url },
                { property: 'og:type', content: data.site.siteMetadata.type },
                {
                  property: 'og:image',
                  content: data.site.siteMetadata.imageUrl
                },
                // {
                //   property: 'twitter:creator',
                //   content: data.site.siteMetadata.twitter
                // },
                // {
                //   property: 'twitter:title',
                //   content: data.site.siteMetadata.title
                // },
                // {
                //   property: 'twitter:description',
                //   content: data.site.siteMetadata.description
                // },
                // {
                //   property: 'twitter:image',
                //   content: data.site.siteMetadata.imageUrl
                // }
              ]}
            >
              <html lang='en' />
            </Helmet>
            <div className={'main-body'}>{children}</div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
