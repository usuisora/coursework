import React from 'react'
import { MyContext } from '../../Provider'
import Sale from './Sale'


const OffButton = ({DeleteFromCheck,rowid})=>
    <button onClick={()=>{DeleteFromCheck(rowid)}}>x</button>

const head =       <li className = 'head'>
                      <span>category</span>
                      <span>mark</span>
                      <span>model</span>
                      <span>color</span>
                      <span className='subsum'>price (uah)</span>
                      <button style = {{ opacity: 0}}></button>
                    </li>

const showList = (check,DeleteFromCheck) =>check == null ? ('check is empty'): 
    check.map((row)=>{
    return (<li key = {row.id}>
                <span>{row.category}</span>
                <span> {row.mark } </span>
                  <span>{row.model}</span>
                  <span>{row.color}</span>
                  <span className='subsum'>  {row.count} x {row.price}  = {row.count*row.price}</span>
                  <OffButton DeleteFromCheck={DeleteFromCheck} rowid={row.id}/>
            </li>)
})

const showTotal  = (check) => {
  const sum = check.reduce((sum,nex)=>{
     return sum + (nex.count*nex.price) 
       },0) 
  return <p>Total : {sum} uah</p>
  
}
const CheckItemList = ({check,DeleteFromCheck}) =>{
    return <ul>
              {head}
              {showList(check,DeleteFromCheck)}
              {showTotal(check)}
            </ul>
}

const CheckBody = ({check,DeleteFromCheck}) =>
    <div className="checkContent">
          <CheckItemList check={check} DeleteFromCheck={DeleteFromCheck}/> 
          <Sale/>
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
