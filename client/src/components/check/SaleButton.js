import React ,  {useState} from 'react'
import {Mutation} from 'react-apollo'
import {ADD_SALE} from '../../mutations'
import {MyContext} from  '../../Provider'
const ReduceFromArrOfObj = (arr,prop) =>{
    let arrIDs  =arr.reduce((prev,next)=>{
        return  [...prev,next[prop]]
    },[])
   return arrIDs
  }
  
function SaleButton({mutation,check,}) {
    let arrIDs  = ReduceFromArrOfObj(check,'id');
    let arrCounts  = ReduceFromArrOfObj(check,'count');
    let checkPrint = []
  return (
    <MyContext.Consumer>
        {
            ({userId,seller,setMsg,setCheck})=>
                <Mutation mutation = {ADD_SALE}>
                        {
                        (mutate, {data}) =>{
                            
                            console.log('mutate',mutate)
                            return( <button type='submit' className = 'btn btn-small black-text yellow  ' onClick = {()=>{
                                        console.log('arrs',arrIDs,arrCounts,userId)
                                        console.log('sale data',data)
                                       setMsg(`Sold in shop {shop} `)
                                mutate({variables:{seller: parseInt(userId),products:arrIDs,prcount:arrCounts}}).then(({data})=>{
                                    console.log('salefata',data.sale.results)

                                },error=>{
                                    console.log('sale error',error)
                                })
                            }}>SALE</button>)

                        }
                           
                        
                        }
                 </Mutation>
            
        }
    </MyContext.Consumer>
  )
}

export default SaleButton
