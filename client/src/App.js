import React from 'react';
import './App.css';
import {MyProvider, MyContext} from './Provider'
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes'
const AppConsumer = () =>   <MyContext.Consumer>
{
  ({shop,updateShop})=>(
     <Routes shop = {shop} updateShop={updateShop}/>
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
