import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from './components/nav/Nav'
import Products from './components/products/Products'
import Check from './components/check/Check'
import Supply from './components/supply/Supply';
import History from './components/history/History'
import Empty from './components/Empty'
import Admin from './components/admin/Admin'
import Auth from './components/auth/Auth'

import PrInfo from './components/products/Info';
import SupInfo from './components/supply/SupInfo.js'
import HistInfo from './components/history/HistInfo'
import CheckInfo from './components/check/CheckInfo'


const DynRoutes = ({updateShop, shop}) =>
<Switch>
    <Route path="/products" exact render={(props) => <Products {...props} shop={shop} />} />
    <Route path="/check" exact component={Check} />
    <Route path="/supply" exact component={Supply} />
    <Route path="/history" exact component={History} />
    <Route path="/manage" exact component={Admin} />

</Switch>

const InfoRoutes = ({updateShop, shop}) =>
<Switch>
    <Route path="/products" exact render={(props) => <PrInfo {...props} shop={shop} />} />
    <Route path="/supply" exact render={(props) => <SupInfo {...props} shop={shop} />} />
    <Route path="/history" exact render={(props) => <HistInfo {...props} shop={shop} />} />
    <Route path="/check" exact render={(props) => <CheckInfo {...props} shop={shop} />} />

</Switch>

const Routes =({updateShop, shop, isAuth})=>{ return  (isAuth === true) ? (
   
        <React.Fragment>
            <Nav />
            <DynRoutes shop={shop} updateShop={updateShop}/>
            <InfoRoutes/>   
        </React.Fragment>
  ):(
        <Route path="/" exact render={(props) => <Auth{...props} shop={shop} updateShop={updateShop}/>} />
  
  )

  }
export default Routes