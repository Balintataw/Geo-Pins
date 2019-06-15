const path = require('path');
const express = require('express');
const { createServer } = require('http');
const cors = require('cors');
// const { ApolloServer } = require('apollo-server');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());

app.use(express.static('public'));

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { findOrCreateUser } = require('./controllers/userController');

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true
    })
    .then(() => {console.log("DB Connected")})
    .catch(err => console.error(err));

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
        let authToken = null;
        let currentUser = null
        try {
            authToken = req.headers.authorization;
            if (authToken) {
                //find or create user
                currentUser = await findOrCreateUser(authToken);
            }
        } catch (err) {
            console.error(`Unable to authenticate with token ${authToken}`);
        }
        return { currentUser }
    },
    introspection: true
});

server.applyMiddleware({
    // path: '/graphql',
    app,
});

// app.use(server)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: PORT }, () =>{
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
    console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`)
})
// app.listen(PORT, () => {
//     console.log(`Apollo server listening on http://localhost:${PORT}/graphql`);
// });
// server.listen({ port: PORT }).then(({ url }) => {
//     console.log(`Server listening on ${url}`);
// });