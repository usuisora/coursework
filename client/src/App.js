import React from 'react';
import './App.css';
import {MyProvider, MyContext} from './Provider'
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

const AppConsumer = () =>   <MyContext.Consumer>
{
  ({shop,isAuth, lastCheck,userId})=>(
     <Routes shop = {shop}  isAuth = {isAuth} lastCheck={lastCheck} userId={userId}/>
  )
}
</MyContext.Consumer>
const App = () =>
      <Router>
        <div className="App">
        <MyProvider>
            <AppConsumer/>                
        </MyProvider>
        </div>
      </Router>

export default App;
