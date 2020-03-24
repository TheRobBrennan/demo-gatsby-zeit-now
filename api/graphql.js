import { ApolloServer, gql } from 'apollo-server-micro'

// Describe our GraphQL schema with type definitions
const typeDefs = gql`
  type Query {
    hello: String!
  }
`

// Write resolvers to respond to our queries and mutations
const resolvers = {
  Query: {
    hello: (_parent, _args, _context) => `Hello @ ${Date.now()}`
  }
}

// Create an instance of our Apollo Server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {}
  },
  // This must be set to true in order for the gatsby-source-graphql plug-in to work
  introspection: true,

  // OPTIONAL: Set to true if you want to be able to use the GraphiQL IDE
  playground: true
})

// Define a handler for our Apollo Server that will be in charge of handling the request/response lifecycle
const handler = apolloServer.createHandler({ path: '/api/graphql' })

// We need to export additional config here to stop the body of incoming HTTP requests from being parsed.
// This is a requirement for GraphQL to work correctly
export const config = {
  api: {
    bodyParse: false
  }
}

// Here is the important part - a serverless function that can handle an incoming request and response from our API
export default handler
