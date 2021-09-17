import express from 'express'
import resolvers from './resolvers';
import schema from './schema';
import {graphqlHTTP} from 'express-graphql'

const app = express();

app.get("/", (req, res) => {
    res.send("Up and running with GraphQL");
})

const root = resolvers;
// const root = {
//     lco : () => {
//         console.log("Learning")
//     }
// }
app.use("/graphql", graphqlHTTP({
    schema : schema,
    graphiql : true,
    rootValue : root
}))

app.listen(8082, () => {
    console.log("Running at port 8082")
})