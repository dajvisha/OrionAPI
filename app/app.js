// Import GraphQL packages
const { GraphQLServer } = require('graphql-yoga');
const { makeExecutableSchema } = require('graphql-tools');
const { importSchema } = require('graphql-import');

// Import DB packages and DB configuration
const mongoose = require('mongoose');
const { db } = require('./config')

// Import GraphQL definitions
const typeDefs = importSchema('./app/schema.graphql');
const resolvers = require('./resolvers');

// Connect mongoose to the DB
mongoose.connect(db.url, { useNewUrlParser: true });

const mongo = mongoose.connection;

mongo.on('error', (error) => console.log('Failed to connect to DB', error))
    .once('open', () => console.log('Connected to DB'));

// Configure GraphQL Schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

// Configure GraphQL Server
const graphQLServer = new GraphQLServer({
    schema,
    context: req => ({ ...req })
});

// Configure Server options
const serverOptions = {
    port: process.env.PORT || 8000,
    endpoint: '/api/graphql',
    playground: '/api/graphql/playground',
    cors: {
        origin: '*',
    }
};

// Start GraphQL Server
graphQLServer.start(serverOptions,
    ({ port }) => console.log(`Orion API running in port ${port}`));
