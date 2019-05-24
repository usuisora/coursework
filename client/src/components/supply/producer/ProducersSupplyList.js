import React,{useState} from 'react'
import {Query} from 'react-apollo'
import {getDeliveryListQuery} from '../../../queries'
import Table from './Table'
// const Head =()=>
// <tr>
//     {col.map((el,ind)=><th key ={ind}>{el}</th>)}
// </tr>
// const Rows  =  () =>
// <Query query = {getDeliveryListQuery}>
//   {({data:{getdeliverylist},err,loading})=>{
//       console.log('proddeliver',getdeliverylist)
//      let  dls = loading ?
//            <tr>Loading...</tr>
//            :
//            getdeliverylist.edges.map({node} =>
//               (<tr key = {node.productId} style ={{height : 20}}>
//                  <td>{node.productId}</td>
//                  <td>{node.producerId}</td>
//                  <td>{node.prodCount}</td>
//                  <td><input  style ={{width : 100}}type ='number'/> uah</td>

//               </tr>)
//            )
//     return dls
      
//   }}
// </Query>

const ProducerSupplyList = () => 
<div className = 'card' style = {{width: '50%'}}>
    <div className ='card-content'>
        <h5 className =  'yellow-text text-darken-4'>Wirehouse supply form</h5>
        <p className = 'grey-text' > Most sold are here! Submit to get more! </p>
          <Table/>
            <div className = 'card-action'>
                <button className = 'btn grey  btn-flat'>Submit</button>
            </div>
    </div>
</div>

export default  ProducerSupplyList 