import React, { Component } from 'react';
import './App.css';
import {MyProvider, MyContext} from './Provider'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from './components/nav/Nav'
import Products from './components/products/Products'
import Check from './components/check/Check'
import Info from './components/products/Info';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <MyProvider>
                  <MyContext>
                    {
                      ({shop,setShop})=>(
                <React.Fragment>
                          <Nav setShop ={setShop} />
                          <Route path="/" exact render={(props) => <Products {...props} shop={shop} />} />
                          <Route path="/Check" component={Check} />
                          <Info/>
                </React.Fragment>
                      )
                    }
                  </MyContext>
        </MyProvider>
        </div>
      </Router>
     
    );
  }
}

export default App;
