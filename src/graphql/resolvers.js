export const resolvers = {
  Query: {
    hello: (_parent, _args, _context) =>
      `Hello. The current time is ${Date.now()}`
  },
  Mutation: {}
}
