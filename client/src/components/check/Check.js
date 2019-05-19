import React from 'react'
import { MyContext } from '../../Provider'
import SaleButton from './SaleButton'
import { Link } from "react-router-dom";
import CheckList from './CheckList'


const CheckBody = ({check,DeleteFromCheck}) =>
    <div className="checkContent">
          <CheckList   check={check} DeleteFromCheck={DeleteFromCheck}/> 
          <SaleButton  check={check}/>
          <Link  className = 'btn btn-flat'  to="/products">Go To Products</Link>
    </div> 

const Check = () => 
<MyContext.Consumer>
  {
    ({check,setCheck,DeleteFromCheck})=>
    <div  className='check' >
      <h4>Check</h4>
        <CheckBody check={check} DeleteFromCheck={DeleteFromCheck}/>
    </div>
  }
</MyContext.Consumer>


export default (Check)
