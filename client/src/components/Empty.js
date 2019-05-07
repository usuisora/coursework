import React from 'react'
import EventBox from './EventBox'
import {MyContext} from '../Provider'
const Consumer =()=> <MyContext.Consumer>
  {
    ({msg})=>
     <EventBox msg = {msg}>dsda</EventBox>
  }
</MyContext.Consumer>
function Empty() {
  return (
    <div className = 'info'>
     <h4>Info</h4>
      <Consumer/>
    </div>
  )
}

export default Empty
