import React from 'react'

const DelButton = ({forDelete})=> 
<button className = 'btn  btn-flat btn-small grey-text  text-darken-3 right ' onClick = {()=>{forDelete([])}}>
<i className="material-icons">delete</i>
</button>

export default DelButton