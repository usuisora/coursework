import React from 'react'
import {Mutation} from 'react-apollo'
import {DEL_CHECK} from '../../../mutations'
  
function DeleteCheck({mutation,check,child,setCheck}) {
 
          return <Mutation mutation = {DEL_CHECK}>
                        {(mutate, {data}) =>{
                            return( <button type='submit' className = 'btn btn-flat btn-small  red-text lighten-1 '
                             onClick = {()=>{
                                       mutate({variables:{checkId:check[0].checkId}}).then(({data})=>{
                                    console.log('DELid',data)
                                    setCheck([])
                                    alert('last check canceled')
                                },error=>{
                                    console.log(error)
                                })
                            }}>Undo</button>)
                        }}
                 </Mutation>
}


export default DeleteCheck
