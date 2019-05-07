import React from 'react'
import {graphql} from 'react-apollo'
import {getShopQuery} from '../../queries'
import {MyContext} from '../../Provider'
import BarLinks from'./BarLinks'
import Tips from './Tips'
import EventBox from '../EventBox'
import User from './User'


const Select = ({query,shop,updateShop}) =>
<div className="selectCon">
      <h5>Shop :</h5>
        <select  className= 'browser-default ' name="shop" id="selectshop"  value={shop} onChange={({target:{value}})=>{updateShop(parseInt(value))}} >
            { query.allShops.edges.map(({node})=>{
                return <option  key = {node.id} value= {node.id}>{node.id}</option>
              })
            }
      </select>
   </div>

const OnQueryExistFragment = ({query}) => 
<MyContext.Consumer>
{
  ({updateShop,shop,msg})=>(
   <React.Fragment>
      <User/>
      <BarLinks/>
      <EventBox msg ={msg}/>
      <Select query = {query} updateShop={updateShop} shop={shop}/>
   </React.Fragment>
  )
}
</MyContext.Consumer>
const Preloader= ({query})=>{
  if(query.loading){
    return <option value="-" disabled>loading...</option>
  } 
  else{
    return  <OnQueryExistFragment query={query}/>
  }
}

function Nav({getShopQuery}) {
  return (
    <div className='nav'>
            <Preloader query = {getShopQuery}/>
            <Tips/>
    </div>
  )
}

export default graphql(getShopQuery,{name:'getShopQuery',options:{
  notifyOnNetworkStatusChange: true
}})(Nav)
