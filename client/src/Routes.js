import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/nav/Nav'
import Products from './components/products/Products'
import Check from './components/check/Check'
import PrInfo from './components/products/Info';
import SupInfo from './components/supply/SupInfo.js'
import HistInfo from './components/history/HistInfo'
import Login from './components/Login'
import Supply from './components/supply/Supply';
import History from './components/history/History'
import Empty from './components/Empty'

const DynRoutes = ({updateShop, shop}) =>
<Switch>
    <Route path="/products" exact render={(props) => <Products {...props} shop={shop} />} />
    <Route path="/check" exact component={Check} />
    <Route path="/supply" exact component={Supply} />
    <Route path="/history" exact component={History} />
    <Route login="/" exact render={(props) => <Login {...props} shop={shop} updateShop={updateShop}/>} />


</Switch>

const InfoRoutes = ({updateShop, shop}) =>
<Switch>
    <Route path="/products" exact render={(props) => <PrInfo {...props} shop={shop} />} />
    <Route path="/supply" exact render={(props) => <SupInfo {...props} shop={shop} />} />
    <Route path="/history" exact render={(props) => <Hist   Info {...props} shop={shop} />} />
    <Route login="/" exact render={(props) => <Empty {...props} shop={shop} updateShop={updateShop}/>} />
</Switch>


const Routes = ({updateShop,shop}) =>
<React.Fragment>
      <Nav />
      <DynRoutes shop={shop} updateShop={updateShop}/>
      <InfoRoutes/>
</React.Fragment>


export default Routes