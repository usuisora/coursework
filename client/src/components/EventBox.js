import React from 'react'


function EventBox({msg,children}) {
  if(msg == null || msg === undefined){
   return <div className='eventbox'>
   <h5>Events will be display here</h5>
 </div>
   }
  return (
    <div className='eventbox'>
      <h5>{msg}</h5>
    </div>
  )
}

export default EventBox
