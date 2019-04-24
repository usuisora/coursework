import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {graphql} from 'react-apollo'
import {getShopQuery} from '../../queries'
import {MyContext} from '../../Provider'


const show = (query)=>{
  console.log('show query ' ,query)
  if(query.loading){
    return (<option value="-" disabled>-</option>)
  } 
  else{
    return (   
      <MyContext.Consumer>
        {
          ({setShop,shop})=>(
            <select name="shop" id="selectshop"  value={shop} onChange={({target:{value}})=>{setShop(parseInt(value))}} >
                { query.allShops.edges.map(({node})=>{
                    return (<option  key = {node.id} value= {node.id} 
                   >{node.id}</option>)
                  })
                }
           </select>
          )
        }
      </MyContext.Consumer>
   
    )
  }
}

function Nav({getShopQuery}) {
  console.log(graphql)
  return (
    <nav>
        <h4>Shop    </h4>
            {show(getShopQuery)}
        <div className="routes">
          <Link to="/products">Products</Link>
          <Link to="/check">Check</Link>
        </div>
    </nav>
  )
}

export default graphql(getShopQuery,{name:'getShopQuery',options:{
  notifyOnNetworkStatusChange: true
}})(Nav)
