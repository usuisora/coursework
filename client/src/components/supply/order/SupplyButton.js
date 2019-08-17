import React ,  {useState} from 'react'
import OrderForm from './OrderForm'
import List from './List'
import {Mutation} from 'react-apollo'
import {ADD_SUPPLY} from '../../../mutations'
import {MyContext} from  '../../../Provider'
function SupplyButton({arrIDs,arrCounts,setOrderItems}) {
  return (
    <MyContext.Consumer>
        {
            ({shop,updateMsg})=>
                <Mutation mutation = {ADD_SUPPLY}>
                        {
                        (addSupply, {data,error,refetch}) =>{
                            
                            return( <button type='submit' className = 'btn-small  btn-flat ' onClick = {()=>{
                                        console.log('arrs',arrIDs,arrCounts,shop)
                                       updateMsg(`New dilivery on shop${shop}`)
                                addSupply({variables:{shopId: parseInt(shop),products:arrIDs,prcount:arrCounts}})
                                setTimeout(setOrderItems([]),2000)
                            }}>Order</button>)

                        }
                           
                        
                        }
                 </Mutation>
            
        }
    </MyContext.Consumer>
  )
}

export default SupplyButton
