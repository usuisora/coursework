import React from 'react'
import {graphql, compose} from 'react-apollo'
import {displayStoves,displayFridges,displayWashers} from '../../queries'
import ProductItem from './ProductItem'
const show = (query)=>{
  if(query.loading){
    return (<p>Loading...</p>)
  } 
  else{
    return (
      <ul>
        { query.allProductsviews.edges.map(({node},index)=>{
             return (<ProductItem  key = {index} node = {node}/>)
          })
        }
      </ul>
    )
   
  }
      
}
function Products({displayStoves,displayFridges,displayWashers,shop}) {
  
  console.log('shop # ',shop)
  return (
    <div className = 'products'>
      <h4>Products</h4>
      <div className = 'category'>
          <h3>Fridges</h3>
           { show(displayFridges)}
      </div>
      <div className = 'category'>
          <h3>Stoves</h3>
          { show(displayStoves)}
      </div>
      <div className = 'category'>
          <h3>Washers</h3>
          { show(displayWashers)}
      </div>
    </div>
  )
}

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
