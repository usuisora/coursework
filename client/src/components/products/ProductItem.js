import React, {Fragment} from 'react'
import {MyContext} from '../../Provider'


const handleClick = ({target}) =>{
  var list = Array.prototype.slice.call(document.querySelectorAll('li'))
  list.map(el => el.className  = '')

  target.className = 'active'
}
function ProductItem({node}) {
  return (
      <MyContext.Consumer>
        {  ({setProductInfo})=>(
            <Fragment> 
                <li onClick = {(e)=>{setProductInfo(node); handleClick(e); }}>{node.model}</li>
            </Fragment>
        )}
      </MyContext.Consumer>
   
  )
}

export default ProductItem
