const express = require("express");
const { postgraphile } = require("postgraphile");
const ConnectionFilterPlugin = require("postgraphile-plugin-connection-filter");
const graphqlHTTP = require('express-graphql');
const cors=require('cors')
require('dotenv').config()

const app = express();
app.use(
  postgraphile(process.env.DATABASE_URL, null, {
    appendPlugins: [ConnectionFilterPlugin],
    graphiql: true,
    enableCors: true

  })
);

app.use(cors())

app.use('/graphql', graphqlHTTP({
  graphiql: true
}));
 
app.listen(process.env.PORT ,()=>{
  console.log('port: ',process.env.PORT )
});


