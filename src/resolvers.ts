
import db from "../_db.js"

export const resolvers = {
    Query: {
        games: () => db.games,
        game: (_, args) => db.games.find(game => game.id === args.id),

        reviews: () => db.reviews,
        review: (_, args) => db.reviews.find(review => review.id === args.id),

        authors: () => db.authors,
        author: (_, args) => db.authors.find(author => author.id === args.id
        )
    }
}