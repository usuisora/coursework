import React,{useState} from 'react'
import {Query} from 'react-apollo'
import {getCheckById} from '../../queries'

const SearchCheck = ({id,setId}) =>{
      return (
          <input placeholder = 'Type check id' value={(isNaN(id)) ? 0 : id} onChange={(e)=>{setId(parseInt(e.target.value))}}/>
      )
  }

export default SearchCheck