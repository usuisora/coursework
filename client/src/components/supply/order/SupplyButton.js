import React ,  {useState} from 'react'
import OrderForm from './OrderForm'
import List from './List'
import {Mutation} from 'react-apollo'
import {ADD_SUPPLY} from '../../../mutations'
import {MyContext} from  '../../../Provider'
function SupplyButton({arrIDs,arrCounts}) {
  return (
    <MyContext.Consumer>
        {
            ({shop,setMsg})=>
                <Mutation mutation = {ADD_SUPPLY}>
                        {
                        (addSupply, {data,error}) =>{
                            
                            return( <button type='submit' className = 'btn-small  btn-flat ' onClick = {()=>{
                                        console.log('arrs',arrIDs,arrCounts,shop)
                                       setMsg(`New dilivery on shop${shop}`)
                                addSupply({variables:{shopId: parseInt(shop),products:arrIDs,prcount:arrCounts}})
                            }}>Order</button>)

                        }
                           
                        
                        }
                 </Mutation>
            
        }
    </MyContext.Consumer>
  )
}

export default SupplyButton
