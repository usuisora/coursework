import React from 'react'
import {MyContext} from '../../Provider'

function Info() {
  return (
    <MyContext.Consumer>
      {({productInfo})=>(
        <div className = 'info'>
          <h4>Info</h4>
          <ul>
              <li>id: <span>{(productInfo.prodId == undefined) ? ' ...':productInfo.prodId }</span></li>
              <li>mark : <span>{(productInfo.prodId == undefined) ? ' ...':productInfo.mark }</span></li>
              <li>color: <span>{(productInfo.prodId == undefined) ? ' ...':productInfo.color }</span></li>
              <li>price: <span>{(productInfo.prodId == undefined) ? ' ...': productInfo.price }</span></li>
          </ul>

           <p>There is {productInfo.avalCount} in shop point # {productInfo.shopId}</p>
          <form>
              <input type='number' placeholder = 'count...'/>
              <button>Buy</button>
          </form>
          <form>
              <input type='number' placeholder = 'remove...'/>
              <button>Remove</button>
          </form>
    </div>
      )}
    </MyContext.Consumer>
  )
}

export default Info
