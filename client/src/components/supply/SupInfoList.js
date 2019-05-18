import React from 'react'
import {getProductInfo} from '../../queries'
import {Query} from 'react-apollo'


const Description = ({id}) =>
    
<Query query={getProductInfo} variables ={{id }}>
  {
    ({data:{productById},loading,error}) => {
      if (loading||error) return <p>loading...</p>;
      return (<React.Fragment>
        <li>mark: {productById.billitemsByProductid.nodes[0].billByBillid.producerByProducerid.mark}</li>
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