import React from 'react'

const DelButton = ({setOrderItems})=> 
<button className = 'btn  btn-flat btn-small grey-text  text-darken-3 right ' onClick = {()=>{setOrderItems([])}}>
<i className="material-icons">delete</i>
</button>

export default DelButton
