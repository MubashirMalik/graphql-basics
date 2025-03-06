
export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
   
    type Review {
        id: ID!
        rating: Int!
        content: String!
        author: Author!
        game: Game!
    }

    type Query {
        games: [Game]
        game(id: ID!): Game

        authors: [Author]
        author(id: ID!): Author

        reviews: [Review]
        review(id: ID!): Review 
   }

    type Mutation {
        createGame(game: CreateGameInput!): Game
        deleteGame(id: ID!): Game
        updateGame(id: ID!, game: UpdateGameInput!): Game
    }

    input CreateGameInput {
        title: String!, 
        platform: [String!]!
   }

   input UpdateGameInput {
        title: String,
        platform: [String!]
   }
`
