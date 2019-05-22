import React from 'react';
import { Route, Switch } from "react-router-dom";

import Nav from './components/nav/Nav'
import Products from './components/products/Products'
import Check from './components/check/Check'
import Supply from './components/supply/Supply';
import History from './components/history/History'
import Admin from './components/admin/Admin'
import Auth from './components/auth/Auth'
import PrInfo from './components/products/Info';
import SupInfo from './components/supply/SupInfo.js'
import HistInfo from './components/history/HistInfo'
import CheckInfo from './components/check/checkinfo/CheckInfo'
import PrintCheck from './components/check/checkinfo/PrintCheck';


const DynRoutes = ({ shop, lastCheck , userId}) =>
<Switch>
    <Route path="/products" exact render={(props) => <Products {...props} shop={shop} />} />
    <Route path="/check" exact component={Check} />
    <Route path="/supply" exact component={Supply} />
    <Route path="/history" exact component={History} />
    <Route path="/manage" exact component={Admin} />
</Switch>

const InfoRoutes = () =>
<Switch>
    <Route path="/products" component = {PrInfo } />
    <Route path="/supply" component = {SupInfo } />
    <Route path="/history" component = {HistInfo } />
    <Route path="/check" component = {CheckInfo } />

</Switch>

const Routes =({ shop, isAuth,lastCheck,userId})=>{ 
    console.log('auth from routes',typeof(isAuth))
    const res =  (isAuth === 'true') ?
                        <React.Fragment>
                              <Nav />
                              <DynRoutes shop={shop} lastCheck={lastCheck} userId={userId} />
                              <InfoRoutes/>
                          </React.Fragment>
               :           
      <Route path="/" component ={Auth}/>
  return res;
    
  }
export default Routes