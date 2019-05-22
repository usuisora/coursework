import React ,{useEffect} from 'react'
import { Link } from "react-router-dom";


const BarLinks=()=>{

   
 return(
    <div className="routes ">

<Link className='link' to="/products">Products</Link>
<Link className='link' to="/check">Check</Link>
<Link className='link' to="/history">History</Link>
<Link className='link' style = {{color: '#a3a'}} to="/supply">Supply</Link>
<Link className='link' style = {{color: '#33a'}} to="/manage">Manage</Link>
<Link className='link' style = {{color: '#33a'}} to="/printcheck">Print Check</Link>

</div>   
 )
 
}
export default BarLinks
