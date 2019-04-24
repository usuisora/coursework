import React from 'react';
import './App.css';
import {MyProvider, MyContext} from './Provider'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/nav/Nav'
import Products from './components/products/Products'
import Check from './components/check/Check'
import Info from './components/products/Info';
import Login from './components/Login'


const DynRoutes = ({setShop, shop}) =>
<Switch>
    <Route path="/products" exact render={(props) => <Products {...props} shop={shop} />} />
    <Route path="/check" exact component={Check} />
    <Route login="/" exact render={(props) => <Login {...props} shop={shop} setShop={setShop}/>} />
</Switch>
const Routes = ({setShop,shop}) =>
<React.Fragment>
      <Nav setShop ={setShop} />
      <DynRoutes shop={shop} setShop={setShop}/>
      <Info/>
</React.Fragment>


const AppConsumer = () =>   <MyContext>
{
  ({shop,setShop})=>(
     <Routes shop = {shop} setShop={setShop}/>
  )
}
</MyContext>
const App = () =>
      <Router>
        <div className="App">
        <MyProvider>
            <AppConsumer/>                
        </MyProvider>
        </div>
      </Router>

export default App;
