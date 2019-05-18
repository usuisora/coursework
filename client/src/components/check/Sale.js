import React ,  {useState} from 'react'
import {Mutation} from 'react-apollo'
import {ADD_SALE} from '../../../mutations'
import {MyContext} from  '../../../Provider'
function SaleButton({arrIDs,arrCounts,mutation,check}) {
  return (
    <MyContext.Consumer>
        {
            ({userId,seller,setMsg})=>
                <Mutation mutation = {ADD_SALE}>
                        {
                        (mutate, {data,error}) =>{
                            
                            return( <button type='submit' className = 'btn-small  btn-flat ' onClick = {()=>{
                                        console.log('arrs',arrIDs,arrCounts,shop)
                                       setMsg(`Sold in shop {shop} `)
                                mutate({variables:{shopId: parseInt(userId),products:arrIDs,prcount:arrCounts}})
                            }}>Order</button>)

                        }
                           
                        
                        }
                 </Mutation>
            
        }
    </MyContext.Consumer>
  )
}

export default SupplyButton
