import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from "./src/schema.js";
import { resolvers } from "./src/resolvers.js";

const server = new ApolloServer({
    typeDefs,
    resolvers
})

startStandaloneServer(server, {
    listen: { port: 4444 }
}).then(res => console.log(`GraphQL server listening on ${4444}`))