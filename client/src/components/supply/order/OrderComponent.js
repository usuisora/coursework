import React ,  {useState} from 'react'
import OrderForm from './OrderForm'
import List from './List'
function OrderComponent({productInfo}) {

  const [rowCount, setRowCount] = useState(0);
  const [ProdIds, setProdIds] = useState([]);
  const [ProdCounts, setProdCounts] = useState([]);
  
  
  
  return (
    <div className = 'card'>
      <div className="card-content">
      <h5 className="card-title center">Order list</h5>
     { productInfo.prodId !== undefined ? 
          <OrderForm productInfo ={productInfo} rowCount={rowCount} 
          setRowCount = {setRowCount} setProdCounts={setProdCounts} ProdCounts={ProdCounts} ProdIds={ProdIds} 
          setProdIds={setProdIds}/>
          :
      <blockquote>Tab on product to  fill order.</blockquote>}
        <List/>
        <div className = 'card-action'> 
          <button>Order</button>
        </div>
      </div>
    </div>
  )
}

export default OrderComponent
