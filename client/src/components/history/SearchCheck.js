import React,{useState} from 'react'
import {Query} from 'react-apollo'
import {getCheckById} from '../../queries'

const SearchCheck = ({id,setId}) =>

<div>
<label htmlFor="search">Check ID</label>
          <input name = "search" placeholder = 'Type check id' value={(isNaN(id)) ? 0 : id} onChange={(e)=>{setId(parseInt(e.target.value))}}/>
</div>

export default SearchCheck