import React from 'react'
import { MyContext } from '../../Provider'
import Sale from './Sale'
const head =       <li className = 'head'>
                      <span>category</span>
                      <span>mark</span>
                      <span>model</span>
                      <span>color</span>
                      <span className='subsum'>price (uah)</span>
                      <button style = {{ opacity: 0}}></button>
                    </li>
const showList = (check) =>check == null ? ('check is empty'): 
check.map((row)=>{
 return (<li key = {row.id}>
            <span>{row.category}</span>
             <span> {row.mark } </span>
              <span>{row.model}</span>
              <span>{row.color}</span>
              <span className='subsum'>  {row.count} x {row.price}  = {row.count*row.price}</span>
              <button>x</button>
         </li>)
})

const showTotal  = (check) => {
  const sum = check.reduce((sum,nex)=>{
     return sum + (nex.count*nex.price) 
       },0) 
  return <p>Total : {sum} uah</p>
  
}
const CheckItemList = ({check}) =>{
    return <ul>
              {head}
              {showList(check)}
              {showTotal(check)}
              </ul>
}

const CheckBody = ({check}) =>
    <div className="checkContent">
          <CheckItemList check={check}/> 
          <Sale/>
    </div> 

const Check = () => 
<MyContext.Consumer>
  {
    ({check,setCheck})=>
    <div  className='check' >
      <h4>Check</h4>
      <CheckBody check={check}/>
    </div>
  }
</MyContext.Consumer>


export default (Check)
