import React from 'react'
import {getTotalCheckBy2Jsx} from '../../../library'


class PrintCheck extends  React.Component  {
 
  render() {
    let {check,userId} = this.props;
    let prods  = check.map(el=><div key={el.productId} >{el.model}::|{el.productId}|:: price: {el.count}*{el.price} </div>)
  
  return (
    <div className='printCheck card z-depth-2 center'>
        <div className="card-content">
            <div>SHOP: SOMEORBSHOP</div>
            <div>address</div>
            <div>Check ID:{check[0].checkId}</div>
            <div>Seller:{check[0].seller}::ID:{userId}</div>
            {prods}
            {getTotalCheckBy2Jsx(check,'price','count') }
            <div>Date:{check[0].date} </div>
        </div>
    </div>
  )}
}

export default PrintCheck


// category: "FRIDGE"
// checkId: 77
// color: "grey"
// count: 1
// date: "2019-05-19T19:11:55.120779"
// model: "mor12"
// price: "9965.0250"
// productId: 7
// seller: "Filip"