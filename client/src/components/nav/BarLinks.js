import React ,{useEffect} from 'react'
import { Link } from "react-router-dom";


const BarLinks=()=>{
let links =  ['products','check','history','supply','manage']
   
 return(
    <div className="routes ">
    {links.map(el =>{
        let puth = '/'+el
      return(
        <button className='btn-small btn-flat '><Link  to={puth}>{el}</Link></button>
      )
    }
     )}
</div>   
 )
 
}
export default BarLinks
