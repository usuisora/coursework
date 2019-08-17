const express = require("express");
const { postgraphile } = require("postgraphile");
const bodyParser = require('body-parser');
const cors=require('cors')
const urlencodedParser = bodyParser.urlencoded({extended: false});
const  app = express();
var app2 =express();

app.use(cors())


// const reload = require('reload');
// support parsing of application/json type post data
app.use(bodyParser.json());
app2.use(bodyParser.json());

const ConnectionFilterPlugin = require("postgraphile-plugin-connection-filter");
const graphqlHTTP = require('express-graphql');
require('dotenv').config()
var who =  process.env.USER
// создаем парсер для данных application/x-www-form-urlencoded
 
app.get("/auth", urlencodedParser, function (request, response) {
    response.sendFile(__dirname + "/public/index.html");
});

app2.get("/role", urlencodedParser,  (req, res) =>{
    res.json({
           role: process.env.USER
          })
});

  


function newConnection (role, pass) {
      process.env.USER=role
      process.env.PASS=pass
      process.env.DATABASE_URL=`postgres:${role}:${pass}@localhost:5432/dblab2`
    app2.use(
        postgraphile( `postgres:${role}:${pass}@localhost:5432/dblab2`, null, {
          appendPlugins: [ConnectionFilterPlugin],
          // watchPg:true,
          graphiql: true,
          enableCors: true,
          pgSettings: async req => ({
            'role':getRoleToUseFromRequest(req.role),
          })
        })
      );
      app2.use('/graphql', graphqlHTTP({
        graphiql: true
      }));
      app2.listen(process.env.PORT ,()=>{
        console.log( 'link on outer', process.env.DATABASE_URL)
      
      });
    }

    app.post("/auth", urlencodedParser, function (req, res) {
        if(!req.body) return res.sendStatus(400);
        console.log(req.body);
        newConnection(req.body.role,req.body.pass);
    
    });

app.listen(4000)













//     function AsManager(){
//         newConnection('manager','1111');
//     }
//     function AsSeller(){
//         newConnection('seller','1234');
//     }
//     app.get('/',)
//     app.post('/',(req, res) =>{
//         console.log(req.body);
//         res.send(200);
        
//       });
      
// // app.get('/auth', (req,res)=>{
// //   res.json({
// //     message: 'req'
// //   })
// // })


// // app.post('/auth',(req,res)=>{
// //   console.log('MYYYY REQUEST!!!!!!!!!!!',req.body)
// //   process.env.USER=req.body.login
// //   process.env.PASS=req.body.password
// //   process.env.DATABASE_URL=`postgres:${req.body.login}:${req.body.password}@localhost:5432/dblab2`
 
// //   res.json({
// //     message:  process.env.DATABASE_URL
// //   })
// // })








