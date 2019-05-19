import React from 'react'
import {MyContext} from  '../Provider'
const EventBox=() =>
  <MyContext.Consumer>
    { ({msg,eventColor})=>
         { const className = `card ${eventColor} lighten-3 z-depth-1`;
             return  <div className = {className}>
             <h6>{msg}</h6>
             </div>}
            
    }
  </MyContext.Consumer>

export default EventBox
