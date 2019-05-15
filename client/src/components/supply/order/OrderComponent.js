import React ,  {useState} from 'react'
import OrderForm from './OrderForm'
import List from './List'
function OrderComponent({productInfo}) {

  const [rowCount, setRowCount] = useState(0)
  return (
    <div className = 'card'>
      <div className="card-content">
      <h5 className="card-title center">Order list</h5>

      <OrderForm count={productInfo.avalCount} rowCount={rowCount} setRowCount = {setRowCount}/>
        <List/>
        <div className = 'card-action'> 
          <button>Order</button>
        </div>
      </div>
    </div>
  )
}

export default OrderComponent
