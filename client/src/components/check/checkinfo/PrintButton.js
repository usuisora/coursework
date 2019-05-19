import React from 'react'

const PrintButton = ({forDelete})=> 
<button className = 'btn  btn-flat btn-small grey-text  text-darken-3 right ' onClick = {()=>{forDelete([])}}>
<i className="material-icons">print</i>
</button>

export default PrintButton