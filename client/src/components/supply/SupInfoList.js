import React , {useState} from 'react'
import {getProductInfo} from '../../queries'
import {Query} from 'react-apollo'

var producerId = 0
const Description = ({id}) =>
    
<Query query={getProductInfo} variables ={{id }} pollInterval={500} >
  { 
    ({data:{productById},loading,error,startPolling, stopPolling}) => {

      if (loading||error) return <p>loading...</p>;
       producerId = productById.billitemsByProductid.nodes[0].billByBillid.producerByProducerid.id
      return (<React.Fragment>
        <li>mark: {productById.billitemsByProductid.nodes[0].billByBillid.producerByProducerid.mark}</li>
        <li className ='grey-text'>Producer id: {producerId}</li>

        <li> {productById.description}</li>

        </React.Fragment>)
    }}
</Query>


const SupInfoList = ({productInfo})=>
{ return (productInfo.prodId === undefined) ? (<p></p>):(
<div >
  <h4>Info</h4>
<ul>
  <li>id: <span>{productInfo.prodId }</span></li>
  <li>model: <span>{productInfo.model }</span></li>
  <li>price: <span>{ productInfo.price } uah</span></li>
  

  <li>available: <span>{productInfo.avalCount } pcs</span></li>
  <Description id ={productInfo.prodId} />

</ul>
  
</div>
)
}
export default SupInfoList