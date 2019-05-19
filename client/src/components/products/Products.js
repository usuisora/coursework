import React from 'react'
import {graphql, compose} from 'react-apollo'
import {displayStoves,displayFridges,displayWashers} from '../../queries'
import ProductItem from './ProductItem'
const show = (query,shop)=>{
 
  
  if(query.loading){
    return (<p>Loading...</p>)
  } 
  else if(query.error){
    query.refetch({query:query,variables:{shop:shop}})
  }
  else{
    return (
      <ul>

        { query.allProductsviews.edges.map(({node},index)=>{
             return (<ProductItem  key = {index} node = {node}  />)
          })
        }
      </ul>
    )
   
  }
      
}
function Products({displayStoves,displayFridges,displayWashers,shop}) {
  
  return (
    <div className = 'products'>
      <h5>Products</h5>
      <div className = 'category'>
          <h4>Fridges</h4>
           { show(displayFridges,shop)}
      </div>
      <div className = 'category'>
          <h4>Stoves</h4>
          { show(displayStoves,shop)}
      </div>
      <div className = 'category'>
          <h4>Washers</h4>
          { show(displayWashers,shop)}
      </div>
    </div>
  )
}

// const Main =()=>{
//   Pros
// }

export default compose(
  graphql(displayFridges,{name:'displayFridges',options:(props)=>{
    return{
      variables:{
           shop: props.shop
      }
    }
 }},),

  graphql(displayStoves,{name:'displayStoves'}),
  graphql(displayWashers,{name:'displayWashers'})
)(Products)
