import React ,  {useState} from 'react'
import OrderForm from './OrderForm'
import List from './List'
import DelButton from '../../DelButton'
import SupplyButton from './SupplyButton'

const ReduceFromArrOfObj = (arr,prop) =>{
  let arrIDs  =arr.reduce((prev,next)=>{
      return  [...prev,next[prop]]
  },[])
 return arrIDs
}

 function OrderComponent({productInfo}) {

  const [rowCount, setRowCount] = useState(0);
  const  [orderItems, setOrderItems] = useState([]);
  var arrIDs  = ReduceFromArrOfObj(orderItems,'id');
  var  arrCounts  = ReduceFromArrOfObj(orderItems,'count');

  return (
    <div className = 'card'>
      <div className="card-content">
      <h5 className="card-title center">Order list</h5>
      
     { productInfo.prodId !== undefined ? 
          <OrderForm productInfo ={productInfo} rowCount={rowCount} 
          setRowCount = {setRowCount} orderItems={orderItems} setOrderItems={setOrderItems}/>
          :
      <blockquote>Tab on product to  fill order.</blockquote>}

        <List orderItems={orderItems} />
          <SupplyButton arrIDs ={arrIDs} arrCounts={arrCounts}  setOrderItems={setOrderItems}/>
          <DelButton forDelete={setOrderItems}/>
      </div>
    </div>
  )
}

export default OrderComponent
