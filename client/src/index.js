//imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';// css style
import App from './App';// App component
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost' // class that connect to graphQL 
import {ApolloProvider} from 'react-apollo'// Provide graphQL scheme to the application

const client = new ApolloClient({
    uri : 'http://localhost:5000/graphql'// server link to connect to graphQL schema  
  })
  //renders app
ReactDOM.render(
<ApolloProvider client ={client}>
                                <App />
</ApolloProvider>,
 document.getElementById('root')
 );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
