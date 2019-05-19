import React from 'react'
import DelButton from '../DelButton'
function CheckActions({setCheck}) {
  return (
    <div>
      <DelButton forDelete={setCheck} />
    </div>
  )
}

export default CheckActions
