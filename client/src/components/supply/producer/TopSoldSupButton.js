import {Mutation} from 'react-apollo'
import {ADD_TOP_SOLD} from '../../../mutations'
import React from 'react'
const  TopSoldSupButton=({updateMsg}) =>
     <Mutation mutation = {ADD_TOP_SOLD}>
                        {
                        (mutate, {data}) =>{
                            console.log('mutate',mutate)
                            return( <button className = 'btn  blue ' onClick = {()=>{
                                       mutate().then(({data})=>{
                                           console.log('successful delivery')
                                },error=>{
                                    alert('No accessrs')
                                })
                            }}>Supply Top Sold</button>)

                        }
                           
                        
                        }
                 </Mutation>



export default TopSoldSupButton


