const express = require("express");
const { postgraphile } = require("postgraphile");
const bodyParser = require('body-parser');
const app = express();

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

const ConnectionFilterPlugin = require("postgraphile-plugin-connection-filter");
const graphqlHTTP = require('express-graphql');
const cors=require('cors')
require('dotenv').config()

app.use(
  postgraphile(process.env.DATABASE_URL, null, {
    appendPlugins: [ConnectionFilterPlugin],
    graphiql: true,
    enableCors: true

  })
);
app.get('/auth', (req,res)=>{
  res.json({
    message: 'req'
  })
})
app.post('/auth',(req,res)=>{
  console.log('NMYYYYRESQeST!!!!!!!!!!!',req.body)
  process.env.USER=req.body.login
  process.env.PASS=req.body.password
  process.env.DATABASE_URL=`postgres:${req.body.login}:${req.body.password}@localhost:5432/dblab2`
 
  res.json({
    message:  process.env.DATABASE_URL
  })
})
app.use("/", express.static(__dirname + "/public"));
app.use(cors())
// app.use('env',process.env)
app.use('/graphql', graphqlHTTP({
  graphiql: true
}));
app.listen(process.env.PORT ,()=>{
  console.log('port: ',process.env.PORT)
});


