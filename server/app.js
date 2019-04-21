const express = require("express");
const { postgraphile } = require("postgraphile");
const graphqlHTTP = require('express-graphql');
const cors=require('cors')
require('dotenv').config()

const app = express();

app.use(postgraphile(process.env.DATABASE_URL,null, {
    graphiql: true,
    enableCors: true
}));

app.use(cors())

app.use('/graphql', graphqlHTTP({
  graphiql: true
}));
 
app.listen(process.env.PORT );


