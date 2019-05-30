import React,{useState} from 'react'
import {Query} from 'react-apollo'
import {getDeliveryListQuery} from '../../../queries'

const Rows  =  () =>
<Query query = {getDeliveryListQuery}>
  {({data,error,loading})=>{
     if(error) {
       return <p>No access</p>
     }else{
      console.log('proddeliver',data.getdeliverylist)
     let  dls = loading ?
           <tr>Loading...</tr>
           :
           data.getdeliverylist.edges.map(({node}) =>
              (<tr key = {node.productId} style ={{height : 20}}>
                 <td>{node.productId}</td>
                 <td>{node.producerId}</td>
                 <td>{node.prodCount}</td>
              </tr>)
           )
    return dls
     }
  }}
</Query>


export default Rows