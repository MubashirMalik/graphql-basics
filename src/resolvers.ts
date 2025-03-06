
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
    },
    Game: {
        reviews: (parent) => db.reviews.filter(review => review.game_id === parent.id)
    },
    Review: {
        game: (parent) => db.games.find(game => game.id === parent.game_id),
        author: (parent) => db.authors.find(author => author.id === parent.author_id)
    },
    Author: {
        reviews: (parent) => db.reviews.filter(review => review.author_id === parent.id)
    },
    Mutation: {
        createGame(_, args) {
            const id = `${db.games.length + 1}`
            db.games.push({ id, ...args.game })
            return db.games.at(-1)
        },
        deleteGame(_, args) {
            const game = db.games.find(game => game.id === args.id)
            db.games = db.games.filter(game => game.id !== args.id)
            return game
        },
        updateGame(_, args) {
            for (let i = 0; i < db.games.length; i++) {
                if (db.games[i].id === args.id) {
                    db.games[i] = {...db.games[i], ...args.game } 
                    return db.games[i]
                }
            }
        }
    }
}