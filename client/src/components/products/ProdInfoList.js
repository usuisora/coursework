import React from 'react'
import {getDescription} from '../../queries'
import {Query} from 'react-apollo'


const Description = ({id}) =>
<Query query={getDescription} variables ={{id}}>
  {({ loading, error, data }) => {
      if (loading||error) return <p>loading...</p>;
    return (
          <div className="descr">
            <h5>Description</h5>
              <p>       {data.productById.description}</p>
            </div>
      );
    }}
</Query>
const ProdInfoList = ({productInfo})=>
 (productInfo.prodId === undefined) ? (<p></p>):(
<div className="">
<ul>
  <li>id: <span>{productInfo.prodId }</span></li>
  <li>model: <span>{productInfo.model }</span></li>
  <li>mark : <span>{productInfo.mark }</span></li>
  <li>color: <span>{productInfo.color }</span></li>
  <li> factory price: <span>{ productInfo.price }</span> <p className = 'grey-text'>Purchase prices is 11%  greater then the factory ones.</p></li>
</ul>
<Description id ={productInfo.prodId}  />
  
</div>
)

export default ProdInfoList