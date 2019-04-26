import React from 'react'
import {graphql} from 'react-apollo'
import {getShopQuery} from '../../queries'
import {MyContext} from '../../Provider'
import BarLinks from'./BarLinks'



const SelectShop = ({query})=>{
  if(query.loading){
    return <option value="-" disabled>loading...</option>
  } 
  else{
    return (   
      <MyContext.Consumer>
        {
          ({updateShop,shop})=>(
           <div className="selectCon">
              <h4>Shop</h4>
                <select name="shop" id="selectshop"  value={shop} onChange={({target:{value}})=>{updateShop(parseInt(value))}} >
                    { query.allShops.edges.map(({node})=>{
                        return <option  key = {node.id} value= {node.id}>{node.id}</option>
                      })
                    }
              </select>
           </div>
          )
        }
      </MyContext.Consumer>
   
    )
  }
}

function Nav({getShopQuery}) {
  return (
    <nav>
            <SelectShop query = {getShopQuery}/>
            <BarLinks/>
    </nav>
  )
}

export default graphql(getShopQuery,{name:'getShopQuery',options:{
  notifyOnNetworkStatusChange: true
}})(Nav)
