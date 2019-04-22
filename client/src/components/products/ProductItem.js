import React, {Fragment} from 'react'
import {MyContext} from '../../Provider'
function ProductItem({node}) {
  return (
      <MyContext.Consumer>
        {  ({setProductInfo})=>(
            <Fragment> 
                <li onClick = {()=>{setProductInfo(node); console.log(node)}}>{node.model}</li>
            </Fragment>
        )}
      </MyContext.Consumer>
   
  )
}

export default ProductItem
