import React from 'react'


function EventBox({msg,children}) {
  if(msg == null || msg === undefined){
   return <div className='eventbox'>
   <h5>Events will be display here</h5>
 </div>
   }
  return (
    <div className='card yellow z-depth-0'>
      <h6>{msg}</h6>
    </div>
  )
}

export default EventBox
