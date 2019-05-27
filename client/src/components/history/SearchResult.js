import React,{useState} from 'react'
import {Query} from 'react-apollo'
import {getCheckById} from '../../queries'
import CheckInfoById from './CheckInfoById'

const SearchResult = ({id}) =>
<Query query = {getCheckById}variables={{id}}>
  {({data,error,loading})=>{
    let check = data.buycheckById;
    let res = (check == null) ? 
      <p className='grey-text'>Check #{id} does'nt exist.</p>
     :
       <CheckInfoById id = {check.id}/>
     return res
  }}
</Query>




export default SearchResult