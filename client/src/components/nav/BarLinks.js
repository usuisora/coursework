import React ,{useEffect} from 'react'
import { Link } from "react-router-dom";
const handleClick = ({target}) =>{
  var list = Array.prototype.slice.call(document.querySelectorAll('.navlink'))
  list.map(el => el.className  = 'btn-small btn-flat navlink')

  target.className = 'btn-small btn-flat navlink active '
}

const BarLinks=({history})=>{
let links =  ['products','check','history','supply','manage']
   
 return(
    <div className="routes ">
    {links.map(el =>{
        let puth = '/'+el;

      return(
        <button className='btn-small btn-flat navlink' onClick={(e)=>handleClick(e)}><Link style = {{width: '100%'}} to={puth}>{el}</Link></button>
      )
    }
     )}
</div>   
 )
 
}
export default BarLinks
