import React,{useState} from 'react'
import {Query} from 'react-apollo'
import {getDeliveryListQuery} from '../../../queries'

const Rows  =  () =>
<Query query = {getDeliveryListQuery}>
  {({data:{getdeliverylist},err,loading})=>{
      console.log('proddeliver',getdeliverylist)
     let  dls = loading ?
           <tr>Loading...</tr>
           :
           getdeliverylist.edges.map(({node}) =>
              (<tr key = {node.productId} style ={{height : 20}}>
                 <td>{node.productId}</td>
                 <td>{node.producerId}</td>
                 <td>{node.prodCount}</td>
              </tr>)
           )
    return dls
  }}
</Query>


export default Rows