import React from 'react'
import {MyContext} from '../../Provider'
import SupInfoList from './SupInfoList'
import OrderComponent from './order/OrderComponent'
const InfoConsumer = () =>
<MyContext.Consumer>
  {
    ({productInfo}) =>
       <React.Fragment>
          <SupInfoList productInfo ={productInfo} />
          <OrderComponent productInfo ={productInfo} />
       </React.Fragment>
  }
</MyContext.Consumer>
function SupInfo() {
  return (
    <div className = 'info'>
       <InfoConsumer/>
    </div>
  )
}

export default SupInfo
