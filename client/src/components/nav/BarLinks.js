import React from 'react'
import { Link } from "react-router-dom";


const BarLinks=()=>
<div className="routes">
   <Link className='link' to="/products">Products</Link>
   <Link className='link' to="/check">Check</Link>
   <Link className='link' to="/history">History</Link>
   <Link className='link' to="/supply">Supply</Link>
   
</div>

export default BarLinks
