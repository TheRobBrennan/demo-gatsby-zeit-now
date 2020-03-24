require('dotenv').config();
const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    url: config.siteUrl,
    imageUrl: config.logoUrl,
    keywords: config.keywords,
    type: config.openGraphType,
    twitter: config.twitterAccount,
    demoGraphQl: config.demoGraphQlURL,
  },
  plugins: [
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          components: `src/components`,
          fonts: `src/assets/fonts`,
          icons: `src/assets/icons`,
          images: `src/assets/images`,
          pages: `src/pages`,
          sass: `src/assets/sass`,
        },
      },
    },
    'gatsby-plugin-react-helmet',

    // TODO: After we have one deployment of the GraphQL API in place, we can enable it in Gatsby here
    // // GraphQL server
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     // Arbitrary name for the remote schema Query type
    //     typeName: "ZEITNOWGRAPHQL",
    //     // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
    //     fieldName: "zeitNowGraphQL",
    //     // GraphQL endpoint
    //     url: config.demoGraphQLURL,
    //   },
    // },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
