import React from 'react'
import {MyContext} from '../../Provider'

const handleBuy=()=>{
  console.log('handle buy')
}
const Buy = () =>
<form>
  <input type='number' placeholder = 'count...'/>
  <button onClick={()=>handleBuy()}>Buy</button>
</form>

const Remove =() =>
         <form>
              <input type='number' placeholder = 'remove...'/>
              <button>Remove</button>
          </form>

const ProductActions = () =>
<div className="actions">
  <Buy/>
  <Remove/>
</div>

const InfoList = ({productInfo})=>
(productInfo.prodId === undefined) ? (<p></p>):(
<ul>
  <li>id: <span>{productInfo.prodId }</span></li>
  <li>mark : <span>{productInfo.mark }</span></li>
  <li>color: <span>{productInfo.color }</span></li>
  <li>price: <span>{ productInfo.price }</span></li>
</ul>
)

function Info() {
  return (
    <MyContext.Consumer>
      {({productInfo})=>
        <div className = 'info'>
          <h4>Info</h4>
          <InfoList productInfo={productInfo}/>
         { productInfo.prodId === undefined ? 
                      (<p></p>) :
                       (<p>There is {productInfo.avalCount} in shop point # {productInfo.shopId}</p>)}
          <ProductActions/>
        </div>
          }
    </MyContext.Consumer>
  )
}

export default Info
